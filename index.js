// index.js
const educationInfo = [
  {
    level: 'High School',
    school: 'Phatfwa Secondary School',
    year: '2015-2019'
  },
  {
    level: 'University/College',
    school: 'Tshwane University of Technology',
    year: '2021-2024',
    program: 'Diploma in Computer Science'
  }
];

function generateEducationInfo(educationList) {
  const educationContainer = document.getElementById('education-list');
  educationList.forEach(edu => {
    const eduDiv = document.createElement('div');
    const levelHeading = document.createElement('h3');
    levelHeading.textContent = edu.level;
    const schoolPara = document.createElement('p');
    schoolPara.textContent = edu.school;
    const yearPara = document.createElement('p');
    yearPara.textContent = edu.year;
    eduDiv.appendChild(levelHeading);
    eduDiv.appendChild(schoolPara);
    eduDiv.appendChild(yearPara);
    if (edu.program) {
      const programPara = document.createElement('p');
      programPara.textContent = edu.program;
      eduDiv.appendChild(programPara);
    }
    const hr = document.createElement('hr');
    eduDiv.appendChild(hr);
    educationContainer.appendChild(eduDiv);
  });
}

generateEducationInfo(educationInfo);


const hardSkills = ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Microsoft'];

    const softSkills = ['Adaptability', 'Team Player', 'Fast Learner', 'Self Motivated', 'Time Management', 'Good Communicator'];

    function generateListItems(list, parentId) {
      const parentElement = document.getElementById(parentId);
      list.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        parentElement.appendChild(listItem);
      });
    }

    generateListItems(hardSkills, 'hard-skills');
    generateListItems(softSkills, 'soft-skills');

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('https://formspree.io/f/xleqawez', { 
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset(); 
      } else {
        
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    });
  });
});
