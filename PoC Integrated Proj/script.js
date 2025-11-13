const bangkokLocalString = "2025-11-11T00:18:19"; 

// แปลง local time เป็น UTC
const bangkokDate = new Date(
  new Date(bangkokLocalString + "+07:00").toISOString() 
);
const backendTimestampUTC = bangkokDate.toISOString();

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // ดึง timezone ของ browser

// แปลง UTC → local time ของ browser
const localTime = new Date(backendTimestampUTC).toLocaleString("en-GB", {
  timeZone: userTimeZone,
  hour12: false,
});

const infoEle = document.createElement("p");
infoEle.innerHTML = `<b>Browser Timezone:</b> ${userTimeZone}`;
document.body.appendChild(infoEle);

const convertedEle = document.createElement("p");
convertedEle.innerHTML = `Declaration Status: Declared FS - Full-Stack Developer plan on <b>${localTime}</b> (${userTimeZone})`;
document.body.appendChild(convertedEle);