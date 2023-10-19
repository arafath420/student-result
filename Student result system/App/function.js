/**
 * Alert System
 */
const creatAlert = (text, type = "warning") => {
  return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  ${text}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
};

/**
 * Send Data In LocalStorage
 */
const setLsData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Get Data From LocalStorage
 */
const getLsData = (key, data) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

const isNumber = (num) => {
  const pattern = /^[0-9]{6,}$/;
  return pattern.test(num);
};

/**
 * Time Ago
 */
const timeAgo = (timestamp) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - timestamp;

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

/**
 * Create a random id
 */
const getRandomUniqueID = (length = 10) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const cryptoObj = window.crypto || window.msCrypto; // For browser compatibility

  if (!cryptoObj || !cryptoObj.getRandomValues) {
    throw new Error(
      "Your browser does not support secure random number generation."
    );
  }

  const randomArray = new Uint32Array(length);
  cryptoObj.getRandomValues(randomArray);

  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset[randomArray[i] % charset.length];
  }

  return result;
};

/**
 * GPA & C-GPA Calculation
 */
const result = (mark) => {
  if (mark >= 0 && mark <= 32) {
    gpa = 0;
    grad = "F";
  } else if (mark > 32 && mark <= 40) {
    gpa = 1;
    grad = "D";
  } else if (mark > 40 && mark <= 50) {
    gpa = 2;
    grad = "C";
  } else if (mark > 50 && mark <= 60) {
    gpa = 3;
    grad = "B";
  } else if (mark > 60 && mark <= 70) {
    gpa = 3.5;
    grad = "A-";
  } else if (mark > 70 && mark <= 80) {
    gpa = 4;
    grad = "A";
  } else if (mark > 80 && mark <= 100) {
    gpa = 5;
    grad = "A+";
  }

  return {
    grad,
    gpa,
  };
};
