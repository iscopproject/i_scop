// ============================================
// DATA - School Clubs, Events, and Announcements
// ============================================

const clubsData = [
    {
        id: 1,
        name: "Business and Accountancy Department",
        category: "academic",
        icon: "fas fa-users",
        logo: "D:\c\Website\1\Website\assets\logos\club-1.png",
        description: "Department-wide student organization.",
        members: 1,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 2,
        name: "College Organization Digital Excellence",
        category: "tech",
        icon: "fas fa-users",
        logo: "D:\c\Website\1\Website\assets\logos\club-2.png",
        description: "Promoting digital excellence and innovation.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 3,
        name: "Educators' Guild",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-3.png",
        description: "Community of aspiring educators.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 4,
        name: "Book Lovers Club",
        category: "arts",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-4.png",
        description: "For students who enjoy reading and literature.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 5,
        name: "Cultural Society",
        category: "arts",
        icon: "fas fa-users",
		logo: "assets/logos/club-5.png",
        description: "Celebrates arts, culture, and traditions.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 6,
        name: "Junior Financial Executives",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-6.png",
        description: "Focus on finance and investment literacy.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 7,
        name: "Junior Marketing Association",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-7.png",
        description: "Marketing enthusiasts and future marketers.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 8,
        name: "Junior Philippine Institute of Accountants",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-8.png",
        description: "Student chapter for aspiring accountants.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 9,
        name: "Kapisanan ng mga mag-aaral sa Filipino",
        category: "arts",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-9.png",
        description: "Promotes Filipino language and culture.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 10,
        name: "League of Elementary Pre-service Teachers",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-10.png",
        description: "Organization for future elementary teachers.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 11,
        name: "Lingua Societas",
        category: "arts",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-11.png",
        description: "Language society for linguistics enthusiasts.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 12,
        name: "Mathematics Society",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-12.png",
        description: "Community for math-focused students.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 13,
        name: "Operations Management Society",
        category: "academic",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-13.png",
        description: "Focus on operations and process management.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 14,
        name: " Rover Scout",
        category: "service",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-14.png",
        description: "Scouting organization focused on service and leadership.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    },
    {
        id: 15,
        name: "SINAG Peer Facilitators",
        category: "service",
        icon: "fas fa-users",
		logo: "D:\c\Website\1\Website\assets\logos\club-15.png",
        description: "Peer facilitation and student support.",
        members: 0,
        meetings: "TBD",
        advisor: "",
        email: "",
        achievements: [],
        requirements: "Open to all interested students."
    }
];

const eventsData = [
    {
        id: 1,
        title: "Financial Literacy Workshop",
        club: "Junior Financial Executives",
        date: new Date(2026, 4, 5),
        time: "2:00 PM - 5:00 PM",
        location: "Business Lab",
        description: "A practical session on budgeting, savings, and student investing."
    },
    {
        id: 2,
        title: "Digital Innovation Bootcamp",
        club: "College Organization Digital Excellence",
        date: new Date(2026, 4, 12),
        time: "7:00 PM",
        location: "Computer Lab 2",
        description: "Hands-on mini bootcamp on web apps and AI tools."
    },
    {
        id: 3,
        title: "Teacher Demo Class Competition",
        club: "Educators' Guild",
        date: new Date(2026, 4, 18),
        time: "6:00 PM",
        location: "Education Building Hall",
        description: "Future educators present creative demo classes."
    },
    {
        id: 4,
        title: "Community Service Outreach",
        club: "SINAG Peer Facilitators",
        date: new Date(2026, 4, 25),
        time: "9:00 AM - 12:00 PM",
        location: "Local Park",
        description: "Peer volunteers lead support and outreach activities."
    },
    {
        id: 5,
        title: "Filipino Literature Forum",
        club: "Kapisanan ng mga mag-aaral sa Filipino",
        date: new Date(2026, 5, 3),
        time: "9:00 AM - 9:00 PM",
        location: "Audio Visual Room",
        description: "Student forum featuring Filipino writing and performances."
    },
    {
        id: 6,
        title: "Math Skills Challenge",
        club: "Mathematics Society",
        date: new Date(2026, 5, 15),
        time: "8:00 AM - 4:00 PM",
        location: "Room 312 & 314",
        description: "Intra-school challenge focused on problem-solving speed."
    }
];

let announcementsData = [];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', async function() {
    initializeNav();
    await loadClubs();
    await loadEvents();
    await loadAnnouncements(); // Now async
    updateStats();
    setupEventListeners();
    setupForm();
    initializeAuth();
});

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function initializeNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// CLUBS FUNCTIONS
// ============================================

async function loadClubs() {
    try {
        const response = await fetch(`${API_BASE}/content/get-achievements`);
        const result = await response.json();
        
        if (result.success) {
            const dbAchievements = result.data;
            
            // Merge achievements into hardcoded clubsData
            clubsData.forEach(club => {
                const clubAchievements = dbAchievements.filter(ach => ach.club_name === club.name);
                // Store objects with id, title, description, and image_url
                const dbAchs = clubAchievements.map(ach => ({ 
                    id: ach.id, 
                    title: ach.title, 
                    description: ach.description,
                    image_url: ach.image_url
                }));
                
                // Keep existing hardcoded achievements and add DB ones
                const existingAchs = (club.achievements || []).map(a => typeof a === 'string' ? { title: a } : a);
                
                // Merge and remove duplicates by title
                const allAchs = [...existingAchs, ...dbAchs];
                const uniqueAchs = [];
                const titles = new Set();
                allAchs.forEach(ach => {
                    if (!titles.has(ach.title)) {
                        titles.add(ach.title);
                        uniqueAchs.push(ach);
                    } else if (ach.id) {
                        // If title exists but this one has an ID, prioritize the one with ID
                        const index = uniqueAchs.findIndex(ua => ua.title === ach.title);
                        if (index !== -1 && !uniqueAchs[index].id) {
                            uniqueAchs[index] = ach;
                        }
                    }
                });
                club.achievements = uniqueAchs;
            });
        }
    } catch (error) {
        console.error('Error loading achievements for clubs:', error);
    }

    const container = document.getElementById('clubsContainer');
    if (!container) return;
    container.innerHTML = '';
    
    // Show first 6 clubs initially
    const clubsToShow = clubsData.slice(0, 6);
    
    clubsToShow.forEach(club => {
        const clubCard = createClubCard(club);
        container.appendChild(clubCard);
    });
}

function localLogoForClub(club) {
    return `assets/logos/club-${club.id}.png`;
}

function createClubCard(club) {
    const card = document.createElement('div');
    card.className = 'club-card';
    card.setAttribute('data-category', club.category);
    card.setAttribute('data-id', club.id);
    
    const categoryNames = {
        'academic': 'Academic',
        'arts': 'Arts & Culture',
        'sports': 'Sports',
        'service': 'Service',
        'tech': 'Technology'
    };
    
    const headerIcon = `<img class="club-logo" src="${localLogoForClub(club)}" alt="${club.name} logo" onerror="this.onerror=null; this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y8KJYkAAAAASUVORK5CYII=';">`;
    const headerStyle = club.color ? `style="background-color: ${club.color}; color: #2c3e50;"` : '';
    const nameStyle = club.color ? `style="color: #2c3e50;"` : '';
    const categoryStyle = club.color ? `style="background-color: rgba(0,0,0,0.1); color: #2c3e50;"` : '';
    
    card.innerHTML = `
        <div class="club-header" ${headerStyle}>
            ${headerIcon}
            <h3 ${nameStyle}>${club.name}</h3>
            <span class="club-category" ${categoryStyle}>${categoryNames[club.category] || club.category}</span>
        </div>
        <div class="club-body">
            <p class="club-description">${club.description}</p>
            <div class="club-details">
                <span><i class="fas fa-users"></i> ${club.members} members</span>
                <span><i class="fas fa-calendar-alt"></i> Weekly</span>
            </div>
        </div>
    `;
    
    // Add click event to show club details
    card.addEventListener('click', function() {
        showClubDetails(club.id);
    });
    
    return card;
}

function showAllClubs() {
    const container = document.getElementById('clubsContainer');
    container.innerHTML = '';
    
    clubsData.forEach(club => {
        const clubCard = createClubCard(club);
        container.appendChild(clubCard);
    });
    
    // Scroll to clubs section
    document.querySelector('#clubs').scrollIntoView({ behavior: 'smooth' });
    
    return false; // Prevent default link behavior
}

function showClubDetails(clubId) {
    const club = clubsData.find(c => c.id === clubId);
    if (!club) return;
    
    const modal = document.getElementById('clubModal');
    const modalContent = document.getElementById('modalContent');
    
    const categoryNames = {
        'academic': 'Academic',
        'arts': 'Arts & Culture',
        'sports': 'Sports',
        'service': 'Service',
        'tech': 'Technology'
    };
    
    const detailIcon = `<img class="club-logo" src="${localLogoForClub(club)}" alt="${club.name} logo" style="height: 50px; width: auto;" onerror="this.onerror=null; this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y8KJYkAAAAASUVORK5CYII=';">`;
    const headerBg = club.id === 1 
        ? 'linear-gradient(135deg, #000000 0%, #f1c40f 100%)' 
        : (club.id === 2 
            ? 'linear-gradient(135deg, #8e44ad 0%, #000000 100%)' 
            : (club.id === 3 
                ? 'linear-gradient(135deg, #27ae60 0%, #8e6237 100%)' 
                : (club.id === 4 
                    ? 'linear-gradient(135deg, #000000 0%, #27ae60 100%)' 
                    : (club.id === 5
                        ? 'linear-gradient(135deg, #ffffff 0%, #f1c40f 100%)'
                        : (club.id === 6
                            ? 'linear-gradient(135deg, #000000 0%, #f1c40f 50%, #3498db 100%)'
                            : (club.id === 7
                                ? 'linear-gradient(135deg, #000000 0%, #f1c40f 50%, #ffffff 100%)'
                               
                                : (club.id ===8)
                                   ? 'linear-gradient(135deg, #2ecc71 0%, #8B4513 50%, #f1c40f 100%)'

                                   : (club.id ===9)
                                   ? 'linear-gradient(135deg, #3498db 0%, #f1c40f 50%, #e74c3c 100%)'

                                   : (club.id ===10)
                                   ? 'linear-gradient(135deg, #3498db 0%, #f1c40f 50%, #2ecc71 100%)'

                                   : (club.id ===11)
                                   ? 'linear-gradient(135deg, #3498db 0%, #ffffff 100%)'


                                    : (club.id ===12)
                                   ? 'linear-gradient(135deg, #8B4513 0%, #2ecc71 50%, #ffffff 100%)'


                                    : (club.id ===13)
                                   ? 'linear-gradient(135deg, #000000 0%, #ffffff 100%)'

                                       : (club.id ===14)
                                   ? 'linear-gradient(135deg, #3498db 0%, #2ecc71 50%, #8B4513 100%)'
                                    
                                        : (club.id ===15)
                                   ? 'linear-gradient(135deg, #f1c40f 0%, #e67e22 100%)'


                                 : '#000'))))));
    const headerTextColor = club.id === 5 ? '#000' : 'white';
    const modalCategoryStyle = club.id === 5
        ? 'background-color: rgba(0, 0, 0, 0.2); color: #000;'
        : 'background-color: rgba(255, 255, 255, 0.2); color: white;';
    
    modalContent.innerHTML = `
        <div class="club-detail">
            <div class="club-detail-header" style="background: ${headerBg}; color: ${headerTextColor}; padding: 30px; border-radius: 10px 10px 0 0; margin: -40px -40px 30px -40px;">
                <div style="display: flex; align-items: center; gap: 20px;">
                    ${detailIcon}
                    <div>
                        <h2 style="color: ${headerTextColor}; margin-bottom: 10px;">${club.name}</h2>
                        <span style="${modalCategoryStyle} padding: 8px 20px; border-radius: 20px; font-size: 0.9rem;">
                            ${categoryNames[club.category] || club.category}
                        </span>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px;">
                <div>
                    <h3 style="margin-bottom: 15px;">About the Club</h3>
                    <p style="margin-bottom: 20px; font-size: 1.1rem;">${club.description}</p>
                    
                    <h3 style="margin-bottom: 15px;">Meeting Information</h3>
                    <p style="margin-bottom: 20px;"><strong>Schedule:</strong> ${club.meetings}</p>
                    
                    <h3 style="margin-bottom: 15px;">Achievements</h3>
                    <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
                        ${club.achievements.map(ach => {
                            const title = typeof ach === 'string' ? ach : ach.title;
                            const desc = typeof ach === 'object' ? ach.description : null;
                            const img = typeof ach === 'object' ? ach.image_url : null;
                            const id = typeof ach === 'object' ? ach.id : null;
                            const isPresident = currentUser && currentUser.role === 'president' && currentUser.clubName === club.name;
                            
                            let deleteBtn = '';
                            if (isPresident && id) {
                                deleteBtn = ` <button class="btn-sm btn-outline-danger" style="padding: 2px 5px; margin-left: 10px; font-size: 0.7rem; border: none; background: transparent; cursor: pointer;" onclick="event.stopPropagation(); deleteContent('achievement', ${id}).then(() => showClubDetails(${club.id}))">
                                    <i class="fas fa-trash"></i>
                                </button>`;
                            }
                            
                            let imgHtml = '';
                            if (img) {
                                imgHtml = `<img src="${img}" alt="${title}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin: 10px 0;">`;
                            }

                            let descHtml = '';
                            if (desc) {
                                descHtml = `<p style="font-size: 0.9rem; color: #666; margin: 5px 0;">${desc}</p>`;
                            }

                            return `
                                <li style="margin-bottom: 20px; padding: 15px; background: #fff; border-radius: 8px; border: 1px solid #eee;">
                                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                        <strong style="font-size: 1.1rem; color: #2c3e50;">${title}</strong>
                                        ${deleteBtn}
                                    </div>
                                    ${descHtml}
                                    ${imgHtml}
                                </li>
                            `;
                        }).join('')}
                    </ul>
                    
                    <h3 style="margin-bottom: 15px;">Requirements to Join</h3>
                    <p>${club.requirements}</p>
                </div>
                
                <div>
                    <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
                        <h4 style="margin-bottom: 15px;">Club Details</h4>
                        <p><strong><i class="fas fa-users"></i> Members:</strong> ${club.members}</p>
                        <p><strong><i class="fas fa-chalkboard-teacher"></i> Advisor:</strong> ${club.advisor}</p>
                        <p><strong><i class="fas fa-envelope"></i> Email:</strong> ${club.email}</p>
                    </div>
                    
                    <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px;">
                        <h4 style="margin-bottom: 15px;">Join This Club</h4>
                        <p style="margin-bottom: 20px;">Interested in joining? Contact the club advisor or attend the next meeting.</p>
                        <button class="btn btn-primary" style="width: 100%; margin-bottom: 10px;" onclick="contactClub('${club.email}', '${club.name}')">
                            <i class="fas fa-envelope"></i> Email Club
                        </button>
                        <button class="btn btn-secondary" style="width: 100%;" onclick="addToCalendar('${club.name}', '${club.meetings}')">
                            <i class="fas fa-calendar-plus"></i> Add to Calendar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Close modal when clicking X
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function contactClub(email, clubName) {
    window.location.href = `mailto:${email}?subject=Interest in joining ${clubName}`;
}

function addToCalendar(clubName, meetingInfo) {
    alert(`Added ${clubName} meetings to your calendar!\n\nMeeting info: ${meetingInfo}\n\n(Note: This is a demo function. In a real app, this would integrate with calendar services.)`);
}

// ============================================
// EVENTS FUNCTIONS
// ============================================

async function loadEvents() {
    try {
        const response = await fetch(`${API_BASE}/content/get-events`);
        const result = await response.json();
        
        if (result.success) {
            // Mix hardcoded events with DB events for now if needed, 
            // or just replace with DB events. Let's replace for consistency.
            const dbEvents = result.data.map(ev => ({
                id: ev.id,
                title: ev.title,
                club: ev.club_name,
                date: new Date(ev.event_date),
                time: ev.event_time,
                location: ev.location,
                description: ev.description
            }));
            
            // For now, let's keep hardcoded ones but prioritize DB ones
            const allEvents = [...dbEvents];
            
            const container = document.querySelector('.events-container');
            if (!container) return;
            container.innerHTML = '';
            
            if (allEvents.length === 0) {
                container.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 40px; color: #666;">No upcoming events.</p>';
                return;
            }
            
            const sortedEvents = allEvents.sort((a, b) => a.date - b.date);
            
            sortedEvents.forEach(event => {
                const eventCard = createEventCard(event);
                container.appendChild(eventCard);
            });
        }
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.style.position = 'relative'; // Ensure button positioning
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const eventDate = event.date;
    const day = eventDate.getDate();
    const month = monthNames[eventDate.getMonth()];
    
    card.innerHTML = `
        <div class="event-date">
            <span class="event-day">${day}</span>
            <span class="event-month">${month}</span>
        </div>
        <div class="event-details">
            <h4>${event.title}</h4>
            <span class="event-club">${event.club}</span>
            <p style="margin-bottom: 10px;">${event.description}</p>
            <span class="event-time"><i class="far fa-clock"></i> ${event.time} • ${event.location}</span>
        </div>
    `;

    // Add delete button if user is the president of this club
    if (currentUser && currentUser.role === 'president' && currentUser.clubName === event.club && event.id) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-sm btn-outline-danger';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.title = 'Delete Event';
        deleteBtn.style.position = 'absolute';
        deleteBtn.style.top = '10px';
        deleteBtn.style.right = '10px';
        deleteBtn.style.padding = '5px 8px';
        deleteBtn.style.backgroundColor = 'white';
        
        deleteBtn.onclick = async (e) => {
            e.stopPropagation();
            if (confirm('Are you sure you want to delete this event?')) {
                await deleteContent('event', event.id);
            }
        };
        card.appendChild(deleteBtn);
    }
    
    return card;
}

// ============================================
// ANNOUNCEMENTS FUNCTIONS
// ============================================

async function loadAnnouncements() {
    try {
        const response = await fetch(`${API_BASE}/content/get-announcements`);
        const result = await response.json();
        
        if (result.success) {
            announcementsData = result.data;
            const container = document.querySelector('.announcements-container');
            if (!container) return;
            container.innerHTML = '';
            
            if (announcementsData.length === 0) {
                container.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 40px; color: #666;">No announcements yet.</p>';
                return;
            }
            
            announcementsData.forEach(announcement => {
                const announcementCard = createAnnouncementCard(announcement);
                container.appendChild(announcementCard);
            });
        }
    } catch (error) {
        console.error('Error loading announcements:', error);
    }
}

function createAnnouncementCard(announcement) {
    const card = document.createElement('div');
    card.className = 'announcement-card';
    card.style.position = 'relative';
    
    // Format date
    const date = new Date(announcement.created_at).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    let imageHtml = '';
    if (announcement.image_url) {
        imageHtml = `<img src="${announcement.image_url}" alt="Announcement Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">`;
    }
    
    card.innerHTML = `
        <div class="announcement-header">
            <h3 class="announcement-title">${announcement.title}</h3>
            <span class="announcement-date">${date}</span>
        </div>
        <span class="announcement-club">${announcement.club_name}</span>
        ${imageHtml}
        <p>${announcement.content}</p>
    `;

    // Add delete button if user is the president of this club
    if (currentUser && currentUser.role === 'president' && currentUser.clubName === announcement.club_name && announcement.id) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-sm btn-outline-danger';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.title = 'Delete Announcement';
        deleteBtn.style.position = 'absolute';
        deleteBtn.style.top = '10px';
        deleteBtn.style.right = '10px';
        deleteBtn.style.padding = '5px 8px';
        deleteBtn.style.backgroundColor = 'white';
        
        deleteBtn.onclick = async (e) => {
            e.stopPropagation();
            if (confirm('Are you sure you want to delete this announcement?')) {
                await deleteContent('announcement', announcement.id);
            }
        };
        card.appendChild(deleteBtn);
    }
    
    return card;
}

// ============================================
// STATS FUNCTIONS
// ============================================

function updateStats() {
    // Calculate total members
    const totalMembers = clubsData.reduce((sum, club) => sum + club.members, 0);
    
    // Update stats
    document.getElementById('clubCount').textContent = clubsData.length;
    document.getElementById('eventCount').textContent = eventsData.length;
    document.getElementById('memberCount').textContent = `${totalMembers}+`;
    
    // Calculate total achievements
    const totalAchievements = clubsData.reduce((sum, club) => sum + club.achievements.length, 0);
    document.getElementById('achievementCount').textContent = `${totalAchievements}+`;
}

// ============================================
// FILTER FUNCTIONS
// ============================================

function setupEventListeners() {
    // Filter buttons for clubs
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter clubs
            const filter = this.getAttribute('data-filter');
            filterClubs(filter);
        });
    });
}

function filterClubs(category) {
    const allClubs = document.querySelectorAll('.club-card');
    
    allClubs.forEach(club => {
        if (category === 'all' || club.getAttribute('data-category') === category) {
            club.style.display = 'block';
        } else {
            club.style.display = 'none';
        }
    });
}

// ============================================
// FORM HANDLING
// ============================================

function setupForm() {
    const form = document.getElementById('newClubForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const clubName = document.getElementById('clubName').value;
        const clubCategory = document.getElementById('clubCategory').value;
        const clubDescription = document.getElementById('clubDescription').value;
        const proposerName = document.getElementById('proposerName').value;
        const proposerEmail = document.getElementById('proposerEmail').value;
        
        // Validate form
        if (!clubName || !clubCategory || !clubDescription || !proposerName || !proposerEmail) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Create submission object
        const submission = {
            clubName,
            clubCategory,
            clubDescription,
            proposerName,
            proposerEmail,
            submittedAt: new Date().toISOString()
        };
        
        // Save to localStorage (for demo)
        let submissions = JSON.parse(localStorage.getItem('clubSubmissions')) || [];
        submissions.push(submission);
        localStorage.setItem('clubSubmissions', JSON.stringify(submissions));
        
        // Show success message
        alert(`Thank you, ${proposerName}! Your proposal for "${clubName}" has been submitted. The clubs committee will review it and contact you at ${proposerEmail}.`);
        
        // Reset form
        form.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to export club data (for administrators)
function exportClubData() {
    const data = {
        clubs: clubsData,
        events: eventsData,
        announcements: announcementsData,
        exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `school-clubs-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

// Function to print club directory
function printClubDirectory() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>School Clubs Directory</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                h1 { color: #2c3e50; }
                .club { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #ddd; }
                .club h3 { color: #3498db; }
                .category { background-color: #eee; padding: 5px 10px; border-radius: 3px; font-size: 0.9em; }
            </style>
        </head>
        <body>
            <h1>School Clubs Directory</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
            
            ${clubsData.map(club => `
                <div class="club">
                    <h3>${club.name}</h3>
                    <span class="category">${club.category.toUpperCase()}</span>
                    <p>${club.description}</p>
                    <p><strong>Meetings:</strong> ${club.meetings}</p>
                    <p><strong>Advisor:</strong> ${club.advisor}</p>
                    <p><strong>Contact:</strong> ${club.email}</p>
                </div>
            `).join('')}
            
            <script>
                window.onload = function() { window.print(); window.close(); }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Demo function to simulate adding a new club (for admin interface demo)
function addDemoClub() {
    const newClub = {
        id: clubsData.length + 1,
        name: "Photography Club",
        category: "arts",
        icon: "fas fa-camera",
        description: "Learn photography techniques, edit photos, and showcase your work.",
        members: 18,
        meetings: "Thursdays, 3:45 PM in Art Room 2",
        advisor: "Ms. Lisa Thompson",
        email: "photography@school.edu",
        achievements: ["Photo Contest Winners", "Exhibition at Local Gallery"],
        requirements: "Camera recommended but not required"
    };
    
    clubsData.push(newClub);
    loadClubs();
    updateStats();
    
    alert("New club added: Photography Club!");
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

const API_BASE = '/api';
let currentUser = null;
let currentPresident = null;

function initializeAuth() {
    const openAuthModal = document.getElementById('openAuthModal');
    const heroAuthBtn = document.getElementById('heroAuthBtn');
    const authModal = document.getElementById('authModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const loginTabBtn = document.getElementById('loginTabBtn');
    const signupTabBtn = document.getElementById('signupTabBtn');
    const presidentTabBtn = document.getElementById('presidentTabBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const presidentLoginForm = document.getElementById('presidentLoginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const eventsPromptModal = document.getElementById('eventsPromptModal');
    const closeEventsPromptModal = document.getElementById('closeEventsPromptModal');
    const goToEventsBtn = document.getElementById('goToEventsBtn');
    const refreshPendingBtn = document.getElementById('refreshPendingBtn');

    if (!authModal || !openAuthModal || !heroAuthBtn || !closeAuthModal || !loginForm || !signupForm || !logoutBtn || !presidentLoginForm) {
        return;
    }

    const openAuth = function(defaultTab) {
        authModal.style.display = 'block';
        switchAuthTab(defaultTab || 'login');
    };

    openAuthModal.addEventListener('click', function(e) {
        e.preventDefault();
        openAuth('login');
    });

    heroAuthBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openAuth('signup');
    });

    closeAuthModal.addEventListener('click', function() {
        authModal.style.display = 'none';
        clearAuthMessage();
    });

    window.addEventListener('click', function(event) {
        if (event.target === authModal) {
            authModal.style.display = 'none';
            clearAuthMessage();
        }
    });

    loginTabBtn.addEventListener('click', function() {
        switchAuthTab('login');
    });

    signupTabBtn.addEventListener('click', function() {
        switchAuthTab('signup');
    });

    if (presidentTabBtn) {
        presidentTabBtn.addEventListener('click', function() {
            switchAuthTab('president');
        });
    }

    loginForm.addEventListener('submit', handleLoginSubmit);
    signupForm.addEventListener('submit', handleSignupSubmit);
    presidentLoginForm.addEventListener('submit', handlePresidentLoginSubmit);

    logoutBtn.addEventListener('click', handleLogout);
    if (refreshPendingBtn) {
        refreshPendingBtn.addEventListener('click', loadPendingMembers);
    }
    const announcementForm = document.getElementById('announcementForm');
    if (announcementForm) {
        announcementForm.addEventListener('submit', handleAnnouncementSubmit);
    }
    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        eventForm.addEventListener('submit', handleEventSubmit);
    }
    const achievementForm = document.getElementById('achievementForm');
    if (achievementForm) {
        achievementForm.addEventListener('submit', handleAchievementSubmit);
    }
    if (closeEventsPromptModal) {
        closeEventsPromptModal.addEventListener('click', closeUpcomingEventsModal);
    }
    if (goToEventsBtn) {
        goToEventsBtn.addEventListener('click', function() {
            closeUpcomingEventsModal();
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    if (eventsPromptModal) {
        window.addEventListener('click', function(event) {
            if (event.target === eventsPromptModal) {
                closeUpcomingEventsModal();
            }
        });
    }
    renderSignupClubOptions();
    restoreUserSession();
}

function renderSignupClubOptions() {
    const signupClubSelect = document.getElementById('signupClubSelect');
    if (!signupClubSelect) return;

    signupClubSelect.innerHTML = '<option value="">Select organization</option>' + clubsData.map(function(club) {
        return `<option value="${club.name}">${club.name}</option>`;
    }).join('');
}

function switchAuthTab(tab) {
    const loginTabBtn = document.getElementById('loginTabBtn');
    const signupTabBtn = document.getElementById('signupTabBtn');
    const presidentTabBtn = document.getElementById('presidentTabBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const presidentLoginForm = document.getElementById('presidentLoginForm');
    const presidentPanel = document.getElementById('presidentPanel');

    clearAuthMessage();
    loginTabBtn.classList.remove('active');
    signupTabBtn.classList.remove('active');
    if (presidentTabBtn) {
        presidentTabBtn.classList.remove('active');
    }
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    if (presidentLoginForm) {
        presidentLoginForm.style.display = 'none';
    }

    if (tab === 'signup') {
        signupTabBtn.classList.add('active');
        signupForm.style.display = 'block';
        if (presidentPanel) presidentPanel.style.display = 'none';
        return;
    }

    if (tab === 'president') {
        if (presidentTabBtn) {
            presidentTabBtn.classList.add('active');
        }
        if (presidentLoginForm) {
            presidentLoginForm.style.display = 'block';
        }
        if (presidentPanel) {
            presidentPanel.style.display = currentPresident ? 'block' : 'none';
        }
        if (currentPresident) {
            loadPendingMembers();
        }
        return;
    }

    loginTabBtn.classList.add('active');
    loginForm.style.display = 'block';
    if (presidentPanel) presidentPanel.style.display = 'none';
}

async function handleSignupSubmit(event) {
    event.preventDefault();
    const fullname = document.getElementById('signupFullname').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const clubName = document.getElementById('signupClubSelect').value;

    if (!fullname || !email || !password || !confirmPassword) {
        showAuthMessage('Please fill in all signup fields.', true);
        return;
    }

    if (!clubName) {
        showAuthMessage('Please select your organization.', true);
        return;
    }

    if (password !== confirmPassword) {
        showAuthMessage('Passwords do not match.', true);
        return;
    }

    try {
        const payload = { fullname, email, password, confirmPassword, clubName };
        const data = await postAuthData('auth/signup', payload);
        showAuthMessage(data.message || 'Signup submitted and waiting for president approval.');
        document.getElementById('signupForm').reset();
        switchAuthTab('login');
    } catch (error) {
        showAuthMessage(error.message, true);
    }
}

async function handleLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showAuthMessage('Please provide your email and password.', true);
        return;
    }

    try {
        const data = await postAuthData('auth/login', { email, password });
        currentUser = data.user || null;
        currentPresident = null;
        localStorage.setItem('schoolClubsUser', JSON.stringify(currentUser));
        updateAuthUI();
        if (currentUser && currentUser.role !== 'president') {
            showUpcomingEventsPrompt();
        }
        showAuthMessage(data.message || 'Login successful.');
        document.getElementById('loginForm').reset();
        setTimeout(function() {
            const authModal = document.getElementById('authModal');
            if (authModal) {
                authModal.style.display = 'none';
            }
            clearAuthMessage();
        }, 700);
    } catch (error) {
        showAuthMessage(error.message, true);
    }
}

async function handlePresidentLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('presidentEmail').value.trim();
    const password = document.getElementById('presidentPassword').value;

    if (!email || !password) {
        showAuthMessage('Please provide president credentials.', true);
        return;
    }

    try {
        const data = await postAuthData('auth/president-login', { email, password });
        currentPresident = data.president || null;
        currentUser = currentPresident;
        localStorage.setItem('schoolClubsUser', JSON.stringify(currentUser));
        updateAuthUI();
        showAuthMessage(data.message || 'President login successful.');
        document.getElementById('presidentLoginForm').style.display = 'none';
        document.getElementById('presidentPanel').style.display = 'block';
        
        // Show club name in dashboard
        const presidentClubName = document.getElementById('presidentClubName');
        if (presidentClubName && currentPresident) {
            presidentClubName.textContent = currentPresident.clubName;
        }
        
        loadPendingMembers();
        loadPresidentContent();
    } catch (error) {
        showAuthMessage(error.message, true);
    }
}

async function handleAnnouncementSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('annTitle').value.trim();
    const content = document.getElementById('annContent').value.trim();
    const imageFile = document.getElementById('annImage').files[0];

    if (!title || !content) {
        alert('Please fill in both title and content.');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const response = await fetch(`${API_BASE}/content/post-announcement`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.success) {
            alert(data.message || 'Announcement posted successfully!');
            document.getElementById('announcementForm').reset();
            await loadAnnouncements(); // Refresh the announcements list on home page
            await loadPresidentContent(); // Refresh dashboard list
        } else {
            alert('Error: ' + data.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

async function handleEventSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('eventTitle').value.trim();
    const event_date = document.getElementById('eventDate').value;
    const event_time = document.getElementById('eventTime').value.trim();
    const location = document.getElementById('eventLocation').value.trim();
    const description = document.getElementById('eventDescription').value.trim();

    if (!title || !event_date || !event_time || !location || !description) {
        alert('Please fill in all event fields.');
        return;
    }

    try {
        const payload = { title, event_date, event_time, location, description };
        const data = await postAuthData('content/post-event', payload);
        alert(data.message || 'Event added successfully!');
        document.getElementById('eventForm').reset();
        await loadEvents(); // Refresh events list
        await loadPresidentContent(); // Refresh dashboard list
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

async function handleAchievementSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('achTitle').value.trim();
    const description = document.getElementById('achDescription').value.trim();
    const imageFile = document.getElementById('achImage').files[0];

    if (!title || !description) {
        alert('Please fill in both title and description.');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const response = await fetch(`${API_BASE}/content/post-achievement`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message || 'Achievement added successfully!');
            document.getElementById('achievementForm').reset();
            await loadClubs(); // Refresh clubs to show new achievement
            await loadPresidentContent(); // Refresh dashboard list
        } else {
            alert('Error: ' + data.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

async function loadPresidentContent() {
    const listContainer = document.getElementById('presidentContentList');
    if (!listContainer || !currentUser || currentUser.role !== 'president') return;

    try {
        // Fetch all events, achievements, and announcements
        const [eventsRes, achRes, annRes] = await Promise.all([
            fetch(`${API_BASE}/content/get-events`).then(r => r.json()),
            fetch(`${API_BASE}/content/get-achievements`).then(r => r.json()),
            fetch(`${API_BASE}/content/get-announcements`).then(r => r.json())
        ]);

        const myEvents = (eventsRes.data || []).filter(e => e.club_name === currentUser.clubName);
        const myAchievements = (achRes.data || []).filter(a => a.club_name === currentUser.clubName);
        const myAnnouncements = (annRes.data || []).filter(a => a.club_name === currentUser.clubName);

        if (myEvents.length === 0 && myAchievements.length === 0 && myAnnouncements.length === 0) {
            listContainer.innerHTML = '<p class="text-muted">No content added yet.</p>';
            return;
        }

        let html = '<div class="content-management-list">';
        
        if (myAnnouncements.length > 0) {
            html += '<h5>Your Announcements</h5>';
            myAnnouncements.forEach(ann => {
                html += `
                    <div class="management-item">
                        <span><strong>${ann.title}</strong></span>
                        <button class="btn-sm btn-outline-danger" onclick="deleteContent('announcement', ${ann.id})">Delete</button>
                    </div>
                `;
            });
        }

        if (myEvents.length > 0) {
            html += '<h5 style="margin-top: 15px;">Your Events</h5>';
            myEvents.forEach(ev => {
                html += `
                    <div class="management-item">
                        <span><strong>${ev.title}</strong> (${ev.event_date})</span>
                        <button class="btn-sm btn-outline-danger" onclick="deleteContent('event', ${ev.id})">Delete</button>
                    </div>
                `;
            });
        }

        if (myAchievements.length > 0) {
            html += '<h5 style="margin-top: 15px;">Your Achievements</h5>';
            myAchievements.forEach(ach => {
                html += `
                    <div class="management-item">
                        <span><strong>${ach.title}</strong></span>
                        <button class="btn-sm btn-outline-danger" onclick="deleteContent('achievement', ${ach.id})">Delete</button>
                    </div>
                `;
            });
        }

        html += '</div>';
        listContainer.innerHTML = html;
    } catch (error) {
        console.error('Error loading president content:', error);
        listContainer.innerHTML = '<p class="text-danger">Error loading content.</p>';
    }
}

async function deleteContent(type, id) {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
        const response = await fetch(`${API_BASE}/content/delete-content`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type, id })
        });
        const result = await response.json();
        
        if (result.success) {
            alert(result.message);
            await loadPresidentContent();
            if (type === 'event') await loadEvents();
            if (type === 'achievement') await loadClubs();
            if (type === 'announcement') await loadAnnouncements();
        } else {
            alert('Error: ' + result.message);
        }
     } catch (error) {
         alert('Error deleting content.');
     }
 }
 window.deleteContent = deleteContent;

async function handleLogout(event) {
    event.preventDefault();
    try {
        await postAuthData('auth/logout', {});
    } catch (error) {
        // Proceed with local logout even when API call fails.
    }

    currentUser = null;
    currentPresident = null;
    localStorage.removeItem('schoolClubsUser');
    updateAuthUI();
    showAuthMessage('Logged out successfully.');
}

function restoreUserSession() {
    const savedUser = localStorage.getItem('schoolClubsUser');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            if (currentUser && currentUser.role === 'president') {
                currentPresident = currentUser;
            }
        } catch (error) {
            currentUser = null;
            currentPresident = null;
        }
    }
    updateAuthUI();
}

function updateAuthUI() {
    const openAuthModal = document.getElementById('openAuthModal');
    const logoutBtn = document.getElementById('logoutBtn');
    const heroAuthBtn = document.getElementById('heroAuthBtn');
    const authWelcomeText = document.getElementById('authWelcomeText');

    if (!openAuthModal || !logoutBtn || !heroAuthBtn || !authWelcomeText) {
        return;
    }

    if (currentUser && currentUser.fullname) {
        openAuthModal.textContent = `Hi, ${currentUser.fullname}`;
        logoutBtn.style.display = 'inline';
        heroAuthBtn.style.display = 'none';
        authWelcomeText.style.display = 'block';
        if (currentUser.role === 'president') {
            authWelcomeText.textContent = `Welcome President ${currentUser.fullname} (${currentUser.clubName}).`;
            const presidentClubName = document.getElementById('presidentClubName');
            if (presidentClubName) {
                presidentClubName.textContent = currentUser.clubName;
            }
        } else {
            authWelcomeText.textContent = `Welcome back, ${currentUser.fullname}! (${currentUser.clubName || 'No club'})`;
        }
        return;
    }

    openAuthModal.textContent = 'Login / Signup';
    logoutBtn.style.display = 'none';
    heroAuthBtn.style.display = 'inline-block';
    authWelcomeText.style.display = 'none';
}

function showAuthMessage(message, isError) {
    const authMessage = document.getElementById('authMessage');
    if (!authMessage) return;

    authMessage.textContent = message;
    authMessage.style.display = 'block';
    authMessage.classList.remove('error', 'success');
    authMessage.classList.add(isError ? 'error' : 'success');
}

function clearAuthMessage() {
    const authMessage = document.getElementById('authMessage');
    if (!authMessage) return;
    authMessage.style.display = 'none';
    authMessage.textContent = '';
    authMessage.classList.remove('error', 'success');
}

async function postAuthData(endpoint, payload) {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    let data = {};
    try {
        data = await response.json();
    } catch (error) {
        throw new Error('Invalid server response.');
    }

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Request failed.');
    }

    return data;
}

function showUpcomingEventsPrompt() {
    if (!currentUser || !currentUser.clubName) {
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = eventsData
        .filter(function(event) {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            return event.club === currentUser.clubName && eventDate >= today;
        })
        .sort(function(a, b) { return a.date - b.date; })
        .slice(0, 5);

    const eventsPromptModal = document.getElementById('eventsPromptModal');
    const eventsPromptSubtitle = document.getElementById('eventsPromptSubtitle');
    const eventsPromptList = document.getElementById('eventsPromptList');
    const achievementsPromptList = document.getElementById('achievementsPromptList');
    const announcementsPromptList = document.getElementById('announcementsPromptList');
    if (!eventsPromptModal || !eventsPromptSubtitle || !eventsPromptList || !achievementsPromptList || !announcementsPromptList) {
        return;
    }

    eventsPromptSubtitle.textContent = `Hi ${currentUser.fullname}, here is your club feed.`;

    const selectedClubSet = new Set([currentUser.clubName]);
    const relatedAnnouncements = announcementsData.filter(function(item) {
        return item.club_name === 'All Clubs' || item.club_name === currentUser.clubName;
    }).slice(0, 6);

    const relatedAchievements = clubsData
        .filter(function(club) { return selectedClubSet.has(club.name); })
        .flatMap(function(club) {
            if (!Array.isArray(club.achievements) || club.achievements.length === 0) {
                return [];
            }
            return club.achievements.map(function(achievement) {
                return { club: club.name, text: achievement };
            });
        })
        .slice(0, 8);

    if (upcomingEvents.length === 0) {
        eventsPromptList.innerHTML = `
            <div class="events-prompt-item">
                <h4>No events yet</h4>
                <p>There are no upcoming events for your selected clubs right now.</p>
            </div>
        `;
    } else {
        eventsPromptList.innerHTML = upcomingEvents.map(function(event) {
            return `
                <div class="events-prompt-item">
                    <h4>${event.title}</h4>
                    <p>${event.club} • ${event.date.toLocaleDateString()} • ${event.time}</p>
                    <p>${event.location}</p>
                </div>
            `;
        }).join('');
    }

    achievementsPromptList.innerHTML = relatedAchievements.length > 0
        ? relatedAchievements.map(function(item) {
            return `
                <div class="events-prompt-item">
                    <h4>${item.club}</h4>
                    <p>${item.text}</p>
                </div>
            `;
        }).join('')
        : `
            <div class="events-prompt-item">
                <h4>No achievements yet</h4>
                <p>No published achievements for your selected clubs yet.</p>
            </div>
        `;

    announcementsPromptList.innerHTML = relatedAnnouncements.length > 0
        ? relatedAnnouncements.map(function(item) {
            const date = new Date(item.created_at).toLocaleDateString();
            return `
                <div class="events-prompt-item">
                    <h4>${item.title}</h4>
                    <p>${item.club_name} • ${date}</p>
                    <p>${item.content}</p>
                </div>
            `;
        }).join('')
        : `
            <div class="events-prompt-item">
                <h4>No announcements yet</h4>
                <p>No announcements available for your selected clubs right now.</p>
            </div>
        `;

    eventsPromptModal.style.display = 'block';
}

function closeUpcomingEventsModal() {
    const eventsPromptModal = document.getElementById('eventsPromptModal');
    if (eventsPromptModal) {
        eventsPromptModal.style.display = 'none';
    }
}

async function loadPendingMembers() {
    if (!currentPresident) return;

    const list = document.getElementById('pendingMembersList');
    if (!list) return;

    try {
        const data = await postAuthData('auth/pending-members', {});
        const members = Array.isArray(data.members) ? data.members : [];
        if (members.length === 0) {
            list.innerHTML = '<div class="pending-member-item"><h4>No pending requests</h4><p>All membership requests are already reviewed.</p></div>';
            return;
        }

        list.innerHTML = members.map(function(member) {
            return `
                <div class="pending-member-item">
                    <h4>${member.fullname}</h4>
                    <p>${member.email}</p>
                    <div class="pending-member-actions">
                        <button type="button" class="btn btn-primary btn-small" onclick="reviewMember(${member.id}, 'approve')">Approve</button>
                        <button type="button" class="btn btn-secondary btn-small" onclick="reviewMember(${member.id}, 'reject')">Reject</button>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        list.innerHTML = `<div class="pending-member-item"><h4>Error</h4><p>${error.message}</p></div>`;
    }
}

async function reviewMember(memberId, action) {
    try {
        const data = await postAuthData('auth/review-member', { memberId, action });
        showAuthMessage(data.message || 'Request updated.');
        loadPendingMembers();
    } catch (error) {
        showAuthMessage(error.message, true);
    }
}
