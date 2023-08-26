document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(res => res.json())
      .then(data => {
        data.message.forEach((imageURL) => {
        let ul = document.createElement('ul')
        const img = document.createElement('img');
        img.src = imageURL;
        ul.append(img)
        document.querySelector('#dog-image-container').appendChild(ul);
        });
      });
  });

    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        Object.keys(data.message).forEach((breed) => {
            let ul = document.querySelector('#dog-breeds');
            let li = document.createElement('li');
            li.textContent = breed;
            ul.append(li);
            li.addEventListener('click', () => {
                li.style.color = 'red'
                })
            const dropdown = document.getElementById('breed-dropdown');
            const listItems = document.querySelectorAll('#dog-breeds li');
                
            dropdown.addEventListener('change', function() {
            const selectedOption = dropdown.value;
                
            listItems.forEach(item => {
            const firstLetter = item.textContent.charAt(0);
                
            if (firstLetter === selectedOption) {
                item.style.display = 'flex'; 
                } else {
                item.style.display = 'none';
                    }
                  });
                });

                    });
                  })
             


    




