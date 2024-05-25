document.getElementById('first').addEventListener('click', function() {
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    second.classList.toggle('hidden');
    third.classList.toggle('hidden');

    // Add or remove the border-visible class based on visibility
    if (!second.classList.contains('hidden') && !third.classList.contains('hidden')) {
      document.querySelectorAll('li').forEach(li => li.classList.add('border-visible'));
    } else {
      document.querySelectorAll('li').forEach(li => li.classList.remove('border-visible'));
    }
  });

  document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    if (!menu.contains(event.target)) {
      document.getElementById('second').classList.add('hidden');
      document.getElementById('third').classList.add('hidden');
      document.querySelectorAll('li').forEach(li => li.classList.remove('border-visible'));
    }
  });
