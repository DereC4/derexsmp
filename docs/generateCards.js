async function fetchPunishments() {
    const response = await fetch('docs/punishments.json');
    const punishments = await response.json();
    const banlist = document.getElementById('banlist');
  
    punishments.forEach(punishment => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = `https://mc-heads.net/avatar/${punishment.uuid}/100`;
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

async function fetchMembers() {
  const memberlist = document.getElementById('memberlist');
  
  try {
    const response = await fetch('https://api.github.com/repos/DereC4/derexsmp/contents/docs/playerdata');
    const files = await response.json();
    
    files.forEach(file => {
      if (file.type === 'file' && !file.name.includes('_old')) {
        const uuid = file.name.replace('.dat', '');
        
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = `https://mc-heads.net/avatar/${uuid}/100`;
        img.alt = `Player head`;
        
        const h2 = document.createElement('h2');
        h2.textContent = uuid.substring(0, 8);
        
        card.appendChild(img);
        card.appendChild(h2);
        memberlist.appendChild(card);
      }
    });
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}
  
if (document.getElementById('banlist')) {
  fetchPunishments();
}

if (document.getElementById('memberlist')) {
  fetchMembers();
}