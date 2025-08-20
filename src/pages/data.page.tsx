import axios from "axios";
import { useState } from "react";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'


const DataPage = () => {
  return (
    <div className="flex p-4 gap-2 justify-evenly flex-col">
      <div className="flex">
        <DashboardUpload />
        <DashboardDelete />
      </div>
      <div className="flex">
        <StaffUpload />
        <StaffDelete />
      </div>
      <div className="flex">
        <AchieveUpload />
        <AchieveDelete />
      </div>
    </div>
  )

};


const DashboardDelete = () => {
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleDelete = async () => {
    setDeleting(true);
    setMessage(null);

    try {
      await axios.delete(`${BACKEND_URL}/api/data/delete`);
      setMessage("✅ Dashboard data deleted successfully.");
    } catch (error: any) {
      console.error("Error deleting dashboard data:", error);
      setMessage("❌ Failed to delete dashboard data.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Delete Data (Dashboard)</h2>

      <button
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting ? "Deleting..." : "Delete Dashboard Data"}
      </button>

      {message && (
        <p className="mt-3 text-sm font-medium">
          {message}
        </p>
      )}
    </div>
  );
};


const StaffDelete = () => {
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleDelete = async () => {
    setDeleting(true);
    setMessage(null);

    try {
      await axios.delete(`${BACKEND_URL}/api/staff/delete`);
      setMessage("✅ Dashboard data deleted successfully.");
    } catch (error: any) {
      console.error("Error deleting dashboard data:", error);
      setMessage("❌ Failed to delete dashboard data.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Delete Data (Staff)</h2>

      <button
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting ? "Deleting..." : "Delete Staff Data"}
      </button>

      {message && (
        <p className="mt-3 text-sm font-medium">
          {message}
        </p>
      )}
    </div>
  );
}

const AchieveDelete = () => {
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleDelete = async () => {
    setDeleting(true);
    setMessage(null);

    try {
      await axios.delete(`${BACKEND_URL}/api/achieve/delete`);
      setMessage("✅ Achieve data deleted successfully.");
    } catch (error: any) {
      console.error("Error deleting dashboard data:", error);
      setMessage("❌ Failed to delete dashboard data.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Delete Data (Achieve)</h2>

      <button
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting ? "Deleting..." : "Delete Achieve Data"}
      </button>

      {message && (
        <p className="mt-3 text-sm font-medium">
          {message}
        </p>
      )}
    </div>
  );
}

const DashboardUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    setMessage("");
  };

  // Handle upload
  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await fetch(`${BACKEND_URL}/api/data/convert-excel`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      setMessage("File uploaded successfully!");
      console.log("Response from API:", data);
    } catch (e) {
      console.error("Error uploading file:", e);
      setMessage("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Upload Excel File (Dashboard)</h2>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

const StaffUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    setMessage("");
  };

  // Handle upload
  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await fetch(`${BACKEND_URL}/api/data/staff-upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      setMessage("File uploaded successfully!");
      console.log("Response from API:", data);
    } catch (e) {
      console.error("Error uploading file:", e);
      setMessage("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Upload Excel File (Staff)</h2>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

const AchieveUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    setMessage("");
  };

  // Handle upload
  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await fetch(`${BACKEND_URL}/api/data/achieve-upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      setMessage("File uploaded successfully!");
      console.log("Response from API:", data);
    } catch (e) {
      console.error("Error uploading file:", e);
      setMessage("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Upload Excel File (Achieve)</h2>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}


export default DataPage;
