import UserModel from "../../DataModels/UserModel.js";
import bcrypt from "bcrypt";
import connectDB from "../../Database/db.js";
connectDB();

const signup = async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const {
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            DOB,
            Password
        } = req.body;

        // Validate required fields
        if (!FirstName || !LastName || !Email || !Password) {
            return res.status(400).json({ message: "FirstName, LastName, Email, and Password are required" });
        }

        // Check if the user already exists by email
        const existingUser = await UserModel.findOne({ email: Email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Generate OTP and expiry time
        const otp = Math.floor(100000 + Math.random() * 900000);
        const otpExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Combine FirstName and LastName into Name
        const Name = `${FirstName} ${LastName}`;

        // Create a new user object
        const user = new UserModel({
            Name:FirstName,
            email: Email,
            contactNo: PhoneNumber || null,
            DOB: DOB || null,
            Password: hashedPassword,
            otp,
            otpExpire,
        });

        // Save the user to the database
        await user.save();

        // Send success response
        res.status(201).json({ message: "User Registered Successfully", otp });

    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({ message: "Validation Error", errors: err.errors });
        }
        console.error("Error in signup:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default signup;
