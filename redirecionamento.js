fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    const country = data.country;
    if (country === "BR") {
      window.location.href = "br/index.html";
    } else if (country === "PT") {
      window.location.href = "pt/index.html";
    }
  });
