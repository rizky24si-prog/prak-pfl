import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('semua');

  // Data anggota komunitas
  const members = [
    { id: 1, name: 'JettMain', rank: 'Diamond', role: 'Duelist', avatar: 'J', status: 'online' },
    { id: 2, name: 'SagePlayer', rank: 'Platinum', role: 'Sentinel', avatar: 'S', status: 'offline' },
    { id: 3, name: 'PhoenixID', rank: 'Immortal', role: 'Duelist', avatar: 'P', status: 'online' },
    { id: 4, name: 'Cypher007', rank: 'Gold', role: 'Sentinel', avatar: 'C', status: 'online' },
    { id: 5, name: 'RazeBlast', rank: 'Diamond', role: 'Duelist', avatar: 'R', status: 'offline' },
    { id: 6, name: 'OmenMain', rank: 'Platinum', role: 'Controller', avatar: 'O', status: 'online' },
    { id: 7, name: 'KilljoyTech', rank: 'Ascendant', role: 'Sentinel', avatar: 'K', status: 'online' },
    { id: 8, name: 'BreachGG', rank: 'Gold', role: 'Initiator', avatar: 'B', status: 'offline' },
  ];

  // Data postingan forum
  const posts = [
    { id: 1, author: 'JettMain', title: 'Tips main Jett di map Bind?', replies: 24, likes: 45, time: '2 jam lalu' },
    { id: 2, author: 'SagePlayer', title: 'Cari tim buat ranked, minimal Diamond', replies: 12, likes: 18, time: '5 jam lalu' },
    { id: 3, author: 'PhoenixID', title: 'Highlight clutch 1v5 tadi malem', replies: 36, likes: 89, time: '1 hari lalu' },
    { id: 4, author: 'Cypher007', title: 'Tripwire setup terbaru di Lotus', replies: 18, likes: 42, time: '2 hari lalu' },
  ];

  // Data turnamen
  const tournaments = [
    { id: 1, name: 'Valorant Community Cup', prize: 'Rp 2.000.000', slots: '16/32 tim', date: '25 Juni 2024' },
    { id: 2, name: 'Duelist Showdown', prize: 'Rp 1.000.000', slots: '8/16 tim', date: '30 Juni 2024' },
    { id: 3, name: 'Sunday Ranked Scrim', prize: 'Rp 500.000', slots: '4/8 tim', date: '2 Juli 2024' },
  ];

  const filteredMembers = activeTab === 'semua' 
    ? members 
    : members.filter(m => m.role.toLowerCase() === activeTab);

  return (
    <div className="valorant-community">
      {/* Navbar */}
      <nav className="community-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="valorant-text">VALORANT</span>
            <span className="community-text">COMMUNITY</span>
          </div>
          <div className="nav-menu">
            <a href="#" className="nav-link active">Beranda</a>
            <a href="#" className="nav-link">Forum</a>
            <a href="#" className="nav-link">Turnamen</a>
            <a href="#" className="nav-link">LFG</a>
            <a href="#" className="nav-link">Profil</a>
          </div>
          <button className="login-btn">MASUK</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">KOMUNITAS <span className="valorant-red">VALORANT</span> INDONESIA</h1>
          <p className="hero-subtitle">Temukan teman, turnamen, dan tips terbaru seputar Valorant</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2.5K+</span>
              <span className="stat-label">Member Aktif</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Turnamen</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Postingan</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary">GABUNG SEKARANG</button>
            <button className="btn btn-secondary">CARI TIM</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-grid">
          {/* Left Column - Members */}
          <div className="members-section">
            <div className="section-header">
              <h2>Member Online <span className="online-count">5 online</span></h2>
              <div className="role-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'semua' ? 'active' : ''}`}
                  onClick={() => setActiveTab('semua')}
                >
                  Semua
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'duelist' ? 'active' : ''}`}
                  onClick={() => setActiveTab('duelist')}
                >
                  Duelist
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'sentinel' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sentinel')}
                >
                  Sentinel
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'controller' ? 'active' : ''}`}
                  onClick={() => setActiveTab('controller')}
                >
                  Controller
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'initiator' ? 'active' : ''}`}
                  onClick={() => setActiveTab('initiator')}
                >
                  Initiator
                </button>
              </div>
            </div>

            <div className="members-grid">
              {filteredMembers.map(member => (
                <div key={member.id} className="member-card">
                  <div className="member-avatar">
                    <span className="avatar-text">{member.avatar}</span>
                    <span className={`status-dot ${member.status}`}></span>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <div className="member-details">
                      <span className="member-rank">{member.rank}</span>
                      <span className="member-role">{member.role}</span>
                    </div>
                  </div>
                  <button className="invite-btn">
                    <i className="fas fa-user-plus"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Forum & Tournaments */}
          <div className="forum-section">
            {/* Forum Posts */}
            <div className="forum-panel">
              <div className="panel-header">
                <h2>Diskusi Terbaru</h2>
                <a href="#" className="view-all">Lihat semua →</a>
              </div>
              
              {posts.map(post => (
                <div key={post.id} className="post-item">
                  <div className="post-author">
                    <div className="author-avatar-small">{post.author[0]}</div>
                    <span>{post.author}</span>
                  </div>
                  <div className="post-content">
                    <h4>{post.title}</h4>
                    <div className="post-meta">
                      <span><i className="far fa-comment"></i> {post.replies} balasan</span>
                      <span><i className="far fa-heart"></i> {post.likes} likes</span>
                      <span><i className="far fa-clock"></i> {post.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="btn-post">BUAT POSTINGAN BARU</button>
            </div>

            {/* Tournaments */}
            <div className="tournament-panel">
              <div className="panel-header">
                <h2>Turnamen Aktif</h2>
                <a href="#" className="view-all">Lihat semua →</a>
              </div>
              
              {tournaments.map(tourney => (
                <div key={tourney.id} className="tournament-card">
                  <div className="tournament-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="tournament-info">
                    <h4>{tourney.name}</h4>
                    <div className="tournament-details">
                      <span><i className="fas fa-tag"></i> {tourney.prize}</span>
                      <span><i className="fas fa-users"></i> {tourney.slots}</span>
                      <span><i className="fas fa-calendar"></i> {tourney.date}</span>
                    </div>
                  </div>
                  <button className="join-tourney-btn">Daftar</button>
                </div>
              ))}
            </div>

            {/* LFG Section */}
            <div className="lfg-panel">
              <h2>Looking For Group</h2>
              <div className="lfg-item">
                <div className="lfg-user">
                  <div className="lfg-avatar">R</div>
                  <div>
                    <strong>RazeLover</strong>
                    <span className="lfg-rank">Platinum 2</span>
                  </div>
                </div>
                <div className="lfg-desc">
                  Butuh 2 orang buat ranked, main sekarang
                </div>
                <button className="lfg-join">Join</button>
              </div>
              <div className="lfg-item">
                <div className="lfg-user">
                  <div className="lfg-avatar">V</div>
                  <div>
                    <strong>ViperMain</strong>
                    <span className="lfg-rank">Diamond 1</span>
                  </div>
                </div>
                <div className="lfg-desc">
                  Cari 5v5 scrim, minimal Ascendant
                </div>
                <button className="lfg-join">Join</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="community-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="valorant-text">VALORANT</span>
            <p>&copy; 2024 Komunitas Valorant Indonesia. Tidak berafiliasi dengan Riot Games.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Komunitas</h4>
              <a href="#">Forum</a>
              <a href="#">Turnamen</a>
              <a href="#">LFG</a>
              <a href="#">Guides</a>
            </div>
            <div className="footer-column">
              <h4>Sosial Media</h4>
              <a href="#"><i className="fab fa-discord"></i> Discord</a>
              <a href="#"><i className="fab fa-whatsapp"></i> WhatsApp</a>
              <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App
