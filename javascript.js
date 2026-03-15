import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function DownloadSection() {
  const [email, setEmail] = useState('');
  const [storedEmail, setStoredEmail] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const emailFromStorage = localStorage.getItem('clientEmail');
    if (emailFromStorage) setStoredEmail(emailFromStorage);
  }, []);

  const handleDownloadClick = () => {
    if (!storedEmail) {
      setShowForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('clientEmail', email);
    setStoredEmail(email);
    setShowForm(false);
  };

  return (
    <div>
      <Button onClick={handleDownloadClick}>Download</Button>

      {showForm && !storedEmail && (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-3 py-2 rounded border"
          />
          <Button type="submit">Submit</Button>
        </form>
      )}

      {storedEmail && (
        <div className="mt-4">
          <a
            href="/client_manager_v2.exe"
            download
            className="px-4 py-3 bg-blue-600 text-white rounded"
          >
            Download Client Manager
          </a>
        </div>
      )}
    </div>
  );
}