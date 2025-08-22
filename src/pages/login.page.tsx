"use client";

import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import axios from "axios";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'

type LOGIN_DATA_TYPE = {
    data: {
        isLoggedIn: boolean;
    }
}

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    const loginData:LOGIN_DATA_TYPE = await axios.post(`${BACKEND_URL}/api/staff/login`, {
        username,
        password
    })

    if(loginData.data.isLoggedIn){
        login(username, password);

        //redirect to home page without refreshing the page

    }else{
        setMessage("Invalid Credentials")
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="w-[380px] shadow-lg rounded-2xl border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="username">Username</label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
                <p className="text-red-500">{message}</p>
              <Button onClick={handleSubmit} className="w-full rounded-xl">
                {loading ? 'Logging In....' : 'Login'}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-gray-500 text-sm">Don’t have an account? <span className="text-blue-600 hover:underline cursor-pointer">Sign up</span></p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
