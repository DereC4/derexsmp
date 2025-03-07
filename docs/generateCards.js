async function fetchPunishments() {
    const response = await fetch('docs/punishments.json');
    const punishments = await response.json();
    const banlist = document.getElementById('banlist');
  
    punishments.forEach(punishment => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = `https://mc-heads.net/avatar/${punishment.name}/100`;
      img.alt = `${punishment.name}'s head`;
  
      const h2 = document.createElement('h2');
      h2.textContent = punishment.name;
  
      const p = document.createElement('p');
      const date = new Date(punishment.punishmentDate);
      p.textContent = `Punishment Date: ${date.toLocaleDateString()}`;
  
      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(p);
      banlist.appendChild(card);
    });
  }
  
  fetchPunishments();