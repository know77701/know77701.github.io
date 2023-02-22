import axios from "axios";

const BASB_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWEyNzJlYmI4MDhlZjA4Nzc2OTE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjcwNTU3NCwiZXhwIjoxNjc2OTY0Nzc0fQ.fV07b8eWFTPvRfBEYsLfst6IMG8p1Kz5aVPZ0EEhQcE";

export const publicRequest = axios.create({
  baseURL: BASB_URL,
});
export const userRequest = axios.create({
  baseURL: BASB_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
