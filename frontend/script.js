document.getElementById("biodataForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  try {
    const response = await fetch("https://atlas-biodata-form.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Submission failed. Try again later.");
    console.error(error);
  }
});
