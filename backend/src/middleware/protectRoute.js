import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth.userId;
      if (!clerkId)
        return res.status(401).json({
          msg: "Unauthorized - invalid token",
        });
      let user = await User.findOne({ clerkId });

      if (!user) {
        user = await User.create({
          clerkId,
          name: req.auth.sessionClaims?.name || "Anonymous",
          email: req.auth.sessionClaims?.email,
          profileImage: req.auth.sessionClaims?.picture,
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protect route middleware ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];
