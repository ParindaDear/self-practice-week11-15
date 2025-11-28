const API = "";

document.getElementById("create-plan").onclick = async () => {
  const data = {
    plan_code: document.getElementById("plan_code").value,
    name_eng: document.getElementById("name_eng").value,
    name_th: document.getElementById("name_th").value
  };
  const res = await fetch(`${API}/study-plan`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
  alert(await res.text());
};

document.getElementById("assign").onclick = async () => {
  const data = {
    student_id: document.getElementById("student_id").value,
    plan_id: document.getElementById("plan_id").value
  };
  const res = await fetch(`${API}/students-plans`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
  alert(await res.text());
};

document.getElementById("search").onclick = async () => {
  const id = document.getElementById("search_id").value;
  const res = await fetch(`${API}/students-plans/${id}`);
  const data = await res.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
};
