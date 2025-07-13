function generateBiodata() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const certifications = document.getElementById("certifications").value;
  const projects = document.getElementById("projects").value;

  const templateType = document.getElementById("templateSelector").value;

  let html = "";

  switch (templateType) {
    case "1": // Classic
      html = `
        <h2 class="text-2xl font-bold">${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Certifications:</strong> ${certifications}</p>
        <p><strong>Projects:</strong><br>${projects.replace(/\n/g, "<br>")}</p>
      `;
      break;
  
    case "2": // Modern
      html = `
        <div class="border-b pb-2 mb-2">
          <h2 class="text-3xl font-extrabold text-blue-700">${name}</h2>
          <p class="text-sm text-gray-600">${email} • ${phone} • ${address}</p>
        </div>
        <p class="italic mb-2">${summary}</p>
        <p><span class="font-semibold">🎓 Education:</span> ${education}</p>
        <p><span class="font-semibold">💼 Experience:</span> ${experience}</p>
        <p><span class="font-semibold">🧠 Skills:</span> ${skills}</p>
        <p><span class="font-semibold">📜 Certifications:</span> ${certifications}</p>
        <p><span class="font-semibold">🚀 Projects:</span><br>${projects.replace(/\n/g, "<br>")}</p>
      `;
      break;
  
    case "3": // Minimal
      html = `
        <h2 class="text-xl font-semibold uppercase">${name}</h2>
        <p>${email} | ${phone}</p>
        <p>${address}</p>
        <hr class="my-2">
        <p>${summary}</p>
        <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
          <li><strong>Education:</strong> ${education}</li>
          <li><strong>Experience:</strong> ${experience}</li>
          <li><strong>Skills:</strong> ${skills}</li>
          <li><strong>Certifications:</strong> ${certifications}</li>
          <li><strong>Projects:</strong> ${projects.replace(/\n/g, "<br>")}</li>
        </ul>
      `;
      break;
  }
  

  document.getElementById("biodataPreview").innerHTML = html;
}

function changeFont() {
  const selectedFont = document.getElementById("fontSelector").value;
  const preview = document.getElementById("biodataPreview");
  preview.classList.remove("font-sans", "font-serif", "font-mono");
  preview.classList.add(selectedFont);
}

function changeFontColor() {
  const color = document.getElementById("fontColorPicker").value;
  document.getElementById("biodataPreview").style.color = color;
}

function setTheme(theme) {
  const preview = document.getElementById("biodataPreview");
  preview.classList.remove("bg-white", "bg-gray-900", "bg-blue-50", "text-white", "text-gray-800");

  if (theme === 'light') {
    preview.classList.add("bg-white", "text-gray-800");
  } else if (theme === 'dark') {
    preview.classList.add("bg-gray-900", "text-white");
  } else if (theme === 'blue') {
    preview.classList.add("bg-blue-50", "text-gray-800");
  }
}

function switchTemplate() {
  generateBiodata();
}

function downloadPDF() {
  generateBiodata(); // Ensure preview is up-to-date
  const element = document.getElementById("biodataPreview");
  const options = {
    margin: 0.5,
    filename: "biodata.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };
  html2pdf().set(options).from(element).save();
}
