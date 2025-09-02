// Application Data
const APP_DATA = {
  appFeatures: {
    videoSync: ["real-time synchronization", "voting system", "host controls", "buffer management"],
    chat: ["rich text formatting", "emojis", "reactions", "private messaging", "typing indicators"],
    users: ["role management", "avatars", "presence status", "friends system"],
    rooms: ["custom themes", "password protection", "public/private", "analytics"]
  },
  userRoles: {
    host: {
      permissions: ["manage_room", "kick_users", "control_video", "transfer_host"],
      color: "#ff6b6b",
      icon: "👑"
    },
    moderator: {
      permissions: ["mute_users", "delete_messages", "manage_queue"],
      color: "#4ecdc4", 
      icon: "⚡"
    },
    viewer: {
      permissions: ["chat", "vote", "add_to_queue"],
      color: "#45b7d1",
      icon: "👤"
    }
  },
  themes: {
    dark: {
      primary: "#2d3748",
      secondary: "#4a5568",
      accent: "#9f7aea",
      background: "#1a202c",
      surface: "#2d3748",
      text: "#e2e8f0"
    },
    light: {
      primary: "#4299e1",
      secondary: "#63b3ed", 
      accent: "#9f7aea",
      background: "#f7fafc",
      surface: "#ffffff",
      text: "#2d3748"
    },
    cosmic: {
      primary: "#667eea",
      secondary: "#764ba2",
      accent: "#f093fb",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      surface: "rgba(255,255,255,0.1)",
      text: "#ffffff"
    }
  },
  sampleRooms: [
    {
      id: "ABC123",
      name: "Movie Night 🍿",
      host: "Alice",
      users: 8,
      currentVideo: "Epic Movie Trailer",
      isPublic: true,
      theme: "dark"
    },
    {
      id: "XYZ789",
      name: "Study Session 📚",
      host: "Bob", 
      users: 15,
      currentVideo: "Physics Lecture",
      isPublic: true,
      theme: "light"
    },
    {
      id: "DEF456", 
      name: "Gaming Highlights 🎮",
      host: "Charlie",
      users: 23,
      currentVideo: "Best Gaming Moments 2024",
      isPublic: true,
      theme: "cosmic"
    }
  ],
  chatCommands: [
    { command: "/help", description: "Show available commands", usage: "/help" },
    { command: "/clear", description: "Clear your chat history", usage: "/clear" },
    { command: "/theme", description: "Change room theme", usage: "/theme [dark|light|cosmic]" },
    { command: "/kick", description: "Kick a user (Host/Moderator only)", usage: "/kick @username" },
    { command: "/vote", description: "Start a vote for video action", usage: "/vote [play|pause|skip]" }
  ],
  videoQueue: [
    {
      id: "dQw4w9WgXcQ",
      title: "Rick Astley - Never Gonna Give You Up",
      duration: "3:32",
      addedBy: "User1",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
    },
    {
      id: "9bZkp7q19f0", 
      title: "PSY - GANGNAM STYLE",
      duration: "4:12",
      addedBy: "User2", 
      thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg"
    }
  ]
};

// Emoji data
const EMOJI_DATA = {
  smileys: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓'],
  gestures: ['👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '👊', '✊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀', '👁️', '👅', '👄'],
  objects: ['🎬', '🎭', '🎪', '🎨', '🎯', '🎲', '🎮', '🎳', '🎺', '🎸', '🎹', '🥁', '🎻', '🎤', '🎧', '🎵', '🎶', '🎼', '🎹', '📱', '💻', '🖥️', '⌨️', '🖱️', '🖲️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '⏰', '⏲️', '⏱️', '🕐', '📅', '📆', '📊', '📈', '📉'],
  symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐']
};

// Global variables
let currentRoom = null;
let currentUser = null;
let youtubePlayer = null;
let broadcastChannel = null;
let isHost = false;
let syncInProgress = false;
let youtubeAPIReady = false;
let currentTheme = localStorage.getItem('theme') || 'dark';
let typingTimer = null;
let currentVote = null;
let videoQueue = [];
let chatSoundsEnabled = localStorage.getItem('chatSounds') !== 'false';
let syncNotificationsEnabled = localStorage.getItem('syncNotifications') !== 'false';

// Utility Functions
function generateRoomId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|m\.youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function showNotification(message, type = 'success', duration = 4000) {
  const notifications = document.getElementById('notifications');
  if (!notifications) return;
  
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  notifications.appendChild(notification);
  
  // Play sound for chat notifications
  if (type === 'info' && chatSoundsEnabled) {
    playNotificationSound();
  }
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, duration);
}

function showSyncNotification(message) {
  if (!syncNotificationsEnabled) return;
  
  const syncNotification = document.createElement('div');
  syncNotification.className = 'sync-notification';
  syncNotification.textContent = message;
  document.body.appendChild(syncNotification);
  
  setTimeout(() => {
    if (syncNotification.parentNode) {
      syncNotification.remove();
    }
  }, 3000);
}

function playNotificationSound() {
  // Simulate notification sound with Web Audio API
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (e) {
    console.log('Audio notification not available');
  }
}

function showLoading(show = true) {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.toggle('hidden', !show);
  }
}

// Theme Management
function initializeTheme() {
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  initializeTheme();
  showNotification(`Switched to ${currentTheme} theme`);
}

function setRoomTheme(theme) {
  if (APP_DATA.themes[theme]) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);
    
    if (currentRoom) {
      currentRoom.theme = theme;
      saveRoomState();
      broadcastMessage({
        type: 'theme-changed',
        data: { theme },
        user: currentUser,
        timestamp: Date.now()
      });
    }
  }
}

// Home Page Functions
function populatePublicRooms() {
  const publicRooms = document.getElementById('publicRooms');
  if (!publicRooms) return;
  
  publicRooms.innerHTML = '';
  
  APP_DATA.sampleRooms.forEach(room => {
    const roomElement = document.createElement('div');
    roomElement.className = 'public-room';
    roomElement.innerHTML = `
      <div class="room-preview">
        <div class="room-theme-indicator" style="background: ${APP_DATA.themes[room.theme]?.primary || '#4299e1'}"></div>
        <div class="room-preview-info">
          <div class="room-preview-name">${room.name}</div>
          <div class="room-preview-stats">${room.users} users • ${room.host} hosting</div>
        </div>
      </div>
      <div class="room-preview-join">Join →</div>
    `;
    
    roomElement.addEventListener('click', () => {
      const roomIdInput = document.getElementById('roomIdInput');
      if (roomIdInput) {
        roomIdInput.value = room.id;
      }
      joinRoom(room.id);
    });
    
    publicRooms.appendChild(roomElement);
  });
}

function createRoom() {
  console.log('Creating room...');
  showLoading();
  
  setTimeout(() => {
    const roomId = generateRoomId();
    const roomNameInput = document.getElementById('roomNameInput');
    const roomThemeSelect = document.getElementById('roomThemeSelect');
    const roomPrivateCheck = document.getElementById('roomPrivateCheck');
    
    const roomName = roomNameInput ? roomNameInput.value.trim() || 'Watch Party' : 'Watch Party';
    const theme = roomThemeSelect ? roomThemeSelect.value : 'dark';
    const isPrivate = roomPrivateCheck ? roomPrivateCheck.checked : false;
    
    console.log('Room settings:', { roomId, roomName, theme, isPrivate });
    
    window.location.hash = `room=${roomId}`;
    initializeRoom(roomId, true, { name: roomName, theme, isPrivate });
    showLoading(false);
  }, 500);
}

function joinRoom(roomId) {
  console.log('Joining room:', roomId);
  
  if (!roomId || roomId.length !== 6) {
    showNotification('Please enter a valid 6-character room ID', 'error');
    return;
  }
  
  showLoading();
  
  setTimeout(() => {
    window.location.hash = `room=${roomId}`;
    initializeRoom(roomId, false);
    showLoading(false);
  }, 500);
}

// Room Management
function initializeRoom(roomId, isRoomHost = false, options = {}) {
  console.log('Initializing room:', roomId, 'Host:', isRoomHost);
  
  currentRoom = {
    id: roomId,
    name: options.name || 'Watch Party',
    theme: options.theme || currentTheme,
    isPrivate: options.isPrivate || false,
    users: [],
    messages: [],
    currentVideo: null,
    videoState: {
      playing: false,
      currentTime: 0,
      duration: 0
    },
    queue: [...APP_DATA.videoQueue],
    analytics: {
      created: Date.now(),
      totalMessages: 0,
      totalVideos: 0,
      peakUsers: 0
    }
  };
  
  isHost = isRoomHost;
  
  // Load room from localStorage if exists
  const savedRoom = localStorage.getItem(`room_${roomId}`);
  if (savedRoom) {
    try {
      const parsed = JSON.parse(savedRoom);
      currentRoom = { ...currentRoom, ...parsed };
      // Don't override new room settings
      if (options.name) currentRoom.name = options.name;
      if (options.theme) currentRoom.theme = options.theme;
    } catch (e) {
      console.warn('Failed to load saved room:', e);
    }
  }
  
  videoQueue = [...currentRoom.queue];
  setRoomTheme(currentRoom.theme);
  showAvatarModal();
}

function showAvatarModal() {
  console.log('Showing avatar modal');
  
  const avatarModal = document.getElementById('avatarModal');
  const usernameInput = document.getElementById('usernameInput');
  const avatarGrid = document.getElementById('avatarGrid');
  
  if (!avatarModal || !usernameInput || !avatarGrid) {
    console.error('Avatar modal elements not found');
    return;
  }
  
  // Setup avatar selection
  avatarGrid.querySelectorAll('.avatar-option').forEach(option => {
    option.addEventListener('click', () => {
      avatarGrid.querySelectorAll('.avatar-option').forEach(opt => 
        opt.classList.remove('active'));
      option.classList.add('active');
    });
  });
  
  avatarModal.classList.remove('hidden');
  usernameInput.focus();
}

function joinWithDetails() {
  console.log('Joining with details...');
  
  const usernameInput = document.getElementById('usernameInput');
  const statusInput = document.getElementById('statusInput');
  const avatarGrid = document.getElementById('avatarGrid');
  
  if (!usernameInput || !avatarGrid) {
    console.error('Required elements not found');
    return;
  }
  
  const username = usernameInput.value.trim();
  const status = statusInput ? statusInput.value.trim() : '';
  const selectedAvatar = avatarGrid.querySelector('.avatar-option.active');
  
  if (!username) {
    showNotification('Please enter a username', 'error');
    return;
  }
  
  if (currentRoom && currentRoom.users.some(user => user.username === username)) {
    showNotification('Username already taken', 'error');
    return;
  }
  
  currentUser = {
    id: Date.now(),
    username: username,
    avatar: selectedAvatar?.getAttribute('data-avatar') || '👤',
    status: status || '',
    role: isHost ? 'host' : 'viewer',
    presence: 'online',
    joinedAt: Date.now(),
    stats: {
      messages: 0,
      reactions: 0,
      videosAdded: 0
    }
  };
  
  console.log('Created user:', currentUser);
  
  const avatarModal = document.getElementById('avatarModal');
  if (avatarModal) {
    avatarModal.classList.add('hidden');
  }
  
  enterRoom();
}

function enterRoom() {
  console.log('Entering room...');
  showLoading();
  
  setTimeout(() => {
    // Initialize broadcast channel
    broadcastChannel = new BroadcastChannel(`watchparty_${currentRoom.id}`);
    broadcastChannel.addEventListener('message', handleBroadcastMessage);
    
    // Add user to room
    currentRoom.users.push(currentUser);
    updateUserAnalytics();
    
    // Show room page
    const homePage = document.getElementById('homePage');
    const roomPage = document.getElementById('roomPage');
    
    if (homePage) homePage.classList.add('hidden');
    if (roomPage) roomPage.classList.remove('hidden');
    
    // Update UI
    updateRoomUI();
    renderMessages();
    renderUsers();
    renderQueue();
    
    // Send user joined message
    broadcastMessage({
      type: 'user-joined',
      user: currentUser,
      timestamp: Date.now()
    });
    
    addSystemMessage(`${currentUser.username} joined the room`);
    
    // Load current video if exists
    if (currentRoom.currentVideo) {
      loadYouTubeVideo(currentRoom.currentVideo.id);
    }
    
    saveRoomState();
    showNotification(`Welcome to ${currentRoom.name}!`);
    showLoading(false);
    
    // Start presence heartbeat
    startPresenceHeartbeat();
  }, 1000);
}

function updateRoomUI() {
  const roomName = document.getElementById('roomName');
  const currentRoomId = document.getElementById('currentRoomId');
  
  if (roomName) roomName.textContent = currentRoom.name;
  if (currentRoomId) currentRoomId.textContent = currentRoom.id;
  
  updateUserCount();
  updateVideoCount();
}

function updateUserCount() {
  const count = currentRoom.users.length;
  const userCount = document.getElementById('userCount');
  
  if (userCount) {
    userCount.textContent = count;
  }
  
  // Update analytics
  currentRoom.analytics.peakUsers = Math.max(currentRoom.analytics.peakUsers, count);
}

function updateVideoCount() {
  const videoCount = document.getElementById('videoCount');
  const queueCount = document.getElementById('queueCount');
  
  if (videoCount) videoCount.textContent = videoQueue.length;
  if (queueCount) queueCount.textContent = videoQueue.length;
}

function updateUserAnalytics() {
  if (currentUser) {
    currentUser.lastActive = Date.now();
  }
}

function leaveRoom() {
  console.log('Leaving room...');
  
  if (currentRoom && currentUser) {
    broadcastMessage({
      type: 'user-left',
      user: currentUser,
      timestamp: Date.now()
    });
    
    addSystemMessage(`${currentUser.username} left the room`);
  }
  
  // Cleanup
  if (broadcastChannel) {
    broadcastChannel.close();
  }
  
  if (youtubePlayer) {
    youtubePlayer.destroy();
    youtubePlayer = null;
  }
  
  currentRoom = null;
  currentUser = null;
  isHost = false;
  videoQueue = [];
  
  // Show home page
  const roomPage = document.getElementById('roomPage');
  const homePage = document.getElementById('homePage');
  
  if (roomPage) roomPage.classList.add('hidden');
  if (homePage) homePage.classList.remove('hidden');
  
  // Clear URL hash
  window.location.hash = '';
  
  showNotification('Left the room');
}

// Broadcast Messaging
function broadcastMessage(message) {
  if (broadcastChannel) {
    broadcastChannel.postMessage(message);
  }
}

function handleBroadcastMessage(event) {
  const { type, data, user, timestamp } = event.data;
  
  switch (type) {
    case 'user-joined':
      handleUserJoined(user);
      break;
    case 'user-left':
      handleUserLeft(user);
      break;
    case 'user-presence':
      handleUserPresence(data, user);
      break;
    case 'chat-message':
      handleChatMessage(data, user);
      break;
    case 'typing-start':
      handleTypingStart(user);
      break;
    case 'typing-stop':
      handleTypingStop(user);
      break;
    case 'video-loaded':
      handleVideoLoaded(data);
      break;
    case 'video-play':
      handleVideoPlay(data);
      break;
    case 'video-pause':
      handleVideoPause(data);
      break;
    case 'video-seek':
      handleVideoSeek(data);
      break;
    case 'queue-updated':
      handleQueueUpdated(data);
      break;
    case 'vote-started':
      handleVoteStarted(data, user);
      break;
    case 'vote-cast':
      handleVoteCast(data, user);
      break;
    case 'theme-changed':
      handleThemeChanged(data);
      break;
    case 'reaction-added':
      handleReactionAdded(data, user);
      break;
  }
}

// User Management
function handleUserJoined(user) {
  if (!currentRoom.users.some(u => u.id === user.id)) {
    currentRoom.users.push(user);
    updateUserCount();
    renderUsers();
    addSystemMessage(`${user.username} joined the room`);
    saveRoomState();
    showNotification(`${user.username} joined`, 'info');
  }
}

function handleUserLeft(user) {
  currentRoom.users = currentRoom.users.filter(u => u.id !== user.id);
  updateUserCount();
  renderUsers();
  addSystemMessage(`${user.username} left the room`);
  saveRoomState();
}

function handleUserPresence(data, user) {
  const roomUser = currentRoom.users.find(u => u.id === user.id);
  if (roomUser) {
    roomUser.presence = data.presence;
    roomUser.lastActive = Date.now();
    renderUsers();
  }
}

function renderUsers() {
  const usersList = document.getElementById('usersList');
  if (!usersList) return;
  
  usersList.innerHTML = '';
  
  currentRoom.users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.className = 'user-item';
    
    const roleInfo = APP_DATA.userRoles[user.role] || APP_DATA.userRoles.viewer;
    
    userElement.innerHTML = `
      <div class="user-avatar">${user.avatar}</div>
      <div class="user-info">
        <div class="user-name">
          ${user.username}
          <span class="user-role ${user.role}">${roleInfo.icon}</span>
          ${user.id === currentUser.id ? ' (You)' : ''}
        </div>
        <div class="user-status">${user.status || 'Watching together'}</div>
      </div>
      <div class="user-presence ${user.presence}"></div>
    `;
    
    usersList.appendChild(userElement);
  });
}

function startPresenceHeartbeat() {
  setInterval(() => {
    if (currentUser && broadcastChannel) {
      broadcastMessage({
        type: 'user-presence',
        data: { presence: 'online' },
        user: currentUser,
        timestamp: Date.now()
      });
    }
  }, 30000); // Every 30 seconds
}

// Chat System
function initializeChat() {
  // Setup emoji picker
  setupEmojiPicker();
  
  // Setup formatting buttons
  const formatBtns = document.querySelectorAll('.format-btn');
  formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const format = btn.getAttribute('data-format');
      toggleFormat(format);
    });
  });
  
  // Auto-resize textarea
  const messageInput = document.getElementById('messageInput');
  if (messageInput) {
    messageInput.addEventListener('input', (e) => {
      e.target.style.height = 'auto';
      e.target.style.height = e.target.scrollHeight + 'px';
      
      // Handle typing indicators
      handleTyping();
    });
  }
}

function setupEmojiPicker() {
  // Populate emoji grid with smileys by default
  renderEmojiGrid('smileys');
  
  // Setup category buttons
  document.querySelectorAll('.emoji-category').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      document.querySelectorAll('.emoji-category').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEmojiGrid(category);
    });
  });
  
  // Toggle emoji picker
  const emojiBtn = document.getElementById('emojiBtn');
  const emojiPicker = document.getElementById('emojiPicker');
  
  if (emojiBtn && emojiPicker) {
    emojiBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPicker.classList.toggle('hidden');
    });
    
    // Close emoji picker when clicking outside
    document.addEventListener('click', () => {
      emojiPicker.classList.add('hidden');
    });
  }
}

function renderEmojiGrid(category) {
  const emojiGrid = document.getElementById('emojiGrid');
  if (!emojiGrid) return;
  
  const emojis = EMOJI_DATA[category] || EMOJI_DATA.smileys;
  emojiGrid.innerHTML = '';
  
  emojis.forEach(emoji => {
    const emojiElement = document.createElement('button');
    emojiElement.className = 'emoji-item';
    emojiElement.textContent = emoji;
    emojiElement.addEventListener('click', (e) => {
      e.stopPropagation();
      insertEmoji(emoji);
      const emojiPicker = document.getElementById('emojiPicker');
      if (emojiPicker) {
        emojiPicker.classList.add('hidden');
      }
    });
    emojiGrid.appendChild(emojiElement);
  });
}

function insertEmoji(emoji) {
  const messageInput = document.getElementById('messageInput');
  if (!messageInput) return;
  
  const start = messageInput.selectionStart;
  const end = messageInput.selectionEnd;
  const text = messageInput.value;
  
  messageInput.value = text.substring(0, start) + emoji + text.substring(end);
  messageInput.selectionStart = messageInput.selectionEnd = start + emoji.length;
  messageInput.focus();
}

function toggleFormat(format) {
  const btn = document.querySelector(`[data-format="${format}"]`);
  if (btn) {
    btn.classList.toggle('active');
  }
}

function handleTyping() {
  if (typingTimer) clearTimeout(typingTimer);
  
  // Send typing start
  broadcastMessage({
    type: 'typing-start',
    user: currentUser,
    timestamp: Date.now()
  });
  
  typingTimer = setTimeout(() => {
    broadcastMessage({
      type: 'typing-stop',
      user: currentUser,
      timestamp: Date.now()
    });
  }, 2000);
}

let typingUsers = new Set();

function handleTypingStart(user) {
  if (user.id !== currentUser.id) {
    typingUsers.add(user.username);
    updateTypingIndicator();
  }
}

function handleTypingStop(user) {
  typingUsers.delete(user.username);
  updateTypingIndicator();
}

function updateTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (!typingIndicator) return;
  
  const count = typingUsers.size;
  if (count === 0) {
    typingIndicator.textContent = '';
  } else if (count === 1) {
    typingIndicator.textContent = `${Array.from(typingUsers)[0]} is typing...`;
  } else if (count === 2) {
    typingIndicator.textContent = `${Array.from(typingUsers).join(' and ')} are typing...`;
  } else {
    typingIndicator.textContent = `${count} people are typing...`;
  }
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  if (!messageInput) return;
  
  const message = messageInput.value.trim();
  if (!message) return;
  
  // Handle chat commands
  if (message.startsWith('/')) {
    handleChatCommand(message);
    messageInput.value = '';
    return;
  }
  
  // Apply formatting
  const formattedMessage = applyMessageFormatting(message);
  
  const chatMessage = {
    id: Date.now(),
    message: formattedMessage,
    originalMessage: message,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    reactions: {}
  };
  
  // Add to local messages
  currentRoom.messages.push({
    ...chatMessage,
    username: currentUser.username,
    avatar: currentUser.avatar,
    userId: currentUser.id,
    role: currentUser.role
  });
  
  // Update user stats
  currentUser.stats.messages++;
  currentRoom.analytics.totalMessages++;
  
  // Broadcast to other users
  broadcastMessage({
    type: 'chat-message',
    data: chatMessage,
    user: currentUser,
    timestamp: Date.now()
  });
  
  renderMessages();
  messageInput.value = '';
  messageInput.style.height = 'auto';
  saveRoomState();
  
  // Clear formatting
  const formatBtns = document.querySelectorAll('.format-btn');
  formatBtns.forEach(btn => btn.classList.remove('active'));
}

function applyMessageFormatting(message) {
  const activeBold = document.querySelector('[data-format="bold"].active');
  const activeItalic = document.querySelector('[data-format="italic"].active');
  
  let formatted = message;
  
  if (activeBold) {
    formatted = `**${formatted}**`;
  }
  if (activeItalic) {
    formatted = `*${formatted}*`;
  }
  
  return formatted;
}

function parseMessageFormatting(message) {
  return message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

function handleChatCommand(command) {
  const [cmd, ...args] = command.split(' ');
  
  switch (cmd) {
    case '/help':
      showChatHelp();
      break;
    case '/clear':
      clearChat();
      break;
    case '/theme':
      if (args[0] && APP_DATA.themes[args[0]]) {
        setRoomTheme(args[0]);
        showNotification(`Theme changed to ${args[0]}`);
      } else {
        addSystemMessage('Available themes: dark, light, cosmic');
      }
      break;
    case '/vote':
      if (args[0]) {
        startVote(args[0]);
      } else {
        showVoteModal();
      }
      break;
    default:
      addSystemMessage(`Unknown command: ${cmd}. Type /help for available commands.`);
  }
}

function showChatHelp() {
  const helpMessage = 'Available commands:\n' + 
    APP_DATA.chatCommands.map(cmd => `${cmd.usage} - ${cmd.description}`).join('\n');
  addSystemMessage(helpMessage);
}

function clearChat() {
  currentRoom.messages = currentRoom.messages.filter(msg => msg.isSystem);
  renderMessages();
  showNotification('Chat cleared');
}

function handleChatMessage(messageData, user) {
  currentRoom.messages.push({
    ...messageData,
    username: user.username,
    avatar: user.avatar,
    userId: user.id,
    role: user.role
  });
  
  // Keep message history limited
  if (currentRoom.messages.length > 200) {
    currentRoom.messages = currentRoom.messages.slice(-200);
  }
  
  renderMessages();
  saveRoomState();
  
  // Show notification for new messages
  if (user.id !== currentUser.id) {
    showNotification(`${user.username}: ${messageData.originalMessage}`, 'info', 2000);
  }
}

function addSystemMessage(message) {
  const systemMessage = {
    id: Date.now(),
    message: message,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isSystem: true
  };
  
  currentRoom.messages.push(systemMessage);
  renderMessages();
  saveRoomState();
}

function renderMessages() {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;
  
  chatMessages.innerHTML = '';
  
  currentRoom.messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    
    if (msg.isSystem) {
      messageDiv.className = 'system-message';
      messageDiv.textContent = msg.message;
    } else {
      messageDiv.className = 'message';
      messageDiv.innerHTML = `
        <div class="message-header">
          <span class="message-avatar">${msg.avatar}</span>
          <span class="message-username">${msg.username}</span>
          <span class="user-role ${msg.role}">${APP_DATA.userRoles[msg.role]?.icon || '👤'}</span>
          <span class="message-time">${msg.timestamp}</span>
        </div>
        <div class="message-content">${parseMessageFormatting(msg.message)}</div>
        ${renderReactions(msg)}
      `;
      
      // Add click handler for reactions
      const reactionsContainer = messageDiv.querySelector('.message-reactions');
      if (reactionsContainer) {
        reactionsContainer.addEventListener('click', (e) => {
          if (e.target.classList.contains('reaction')) {
            const emoji = e.target.getAttribute('data-emoji');
            toggleReaction(msg.id, emoji);
          }
        });
      }
    }
    
    chatMessages.appendChild(messageDiv);
  });
  
  // Auto-scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderReactions(message) {
  if (!message.reactions || Object.keys(message.reactions).length === 0) {
    return '<div class="message-reactions"></div>';
  }
  
  const reactions = Object.entries(message.reactions).map(([emoji, users]) => {
    const isActive = users.includes(currentUser.id);
    return `<div class="reaction ${isActive ? 'active' : ''}" data-emoji="${emoji}">
      ${emoji} ${users.length}
    </div>`;
  }).join('');
  
  return `<div class="message-reactions">${reactions}</div>`;
}

function toggleReaction(messageId, emoji) {
  const message = currentRoom.messages.find(m => m.id === messageId);
  if (!message) return;
  
  if (!message.reactions) message.reactions = {};
  if (!message.reactions[emoji]) message.reactions[emoji] = [];
  
  const userIndex = message.reactions[emoji].indexOf(currentUser.id);
  if (userIndex > -1) {
    message.reactions[emoji].splice(userIndex, 1);
    if (message.reactions[emoji].length === 0) {
      delete message.reactions[emoji];
    }
  } else {
    message.reactions[emoji].push(currentUser.id);
    currentUser.stats.reactions++;
  }
  
  broadcastMessage({
    type: 'reaction-added',
    data: { messageId, emoji, reactions: message.reactions },
    user: currentUser,
    timestamp: Date.now()
  });
  
  renderMessages();
  saveRoomState();
}

function handleReactionAdded(data, user) {
  const message = currentRoom.messages.find(m => m.id === data.messageId);
  if (message) {
    message.reactions = data.reactions;
    renderMessages();
    saveRoomState();
  }
}

// YouTube Integration
function onYouTubeIframeAPIReady() {
  youtubeAPIReady = true;
  console.log('YouTube API ready');
}

function loadYouTubeVideo(videoId) {
  console.log('Loading video:', videoId);
  
  if (!youtubeAPIReady) {
    showNotification('YouTube API not ready, loading...', 'warning');
    // Try again in a moment
    setTimeout(() => loadYouTubeVideo(videoId), 2000);
    return;
  }
  
  showLoading();
  
  // Simulate video info fetch
  const videoInfo = getVideoInfo(videoId);
  
  setTimeout(() => {
    if (youtubePlayer) {
      youtubePlayer.destroy();
    }
    
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoPlaceholder) videoPlaceholder.style.display = 'none';
    if (videoPlayer) videoPlayer.style.display = 'block';
    
    youtubePlayer = new YT.Player('videoPlayer', {
      width: '100%',
      height: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        fs: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
    
    currentRoom.currentVideo = { id: videoId, ...videoInfo };
    currentRoom.analytics.totalVideos++;
    updateVideoUI(videoInfo);
    
    saveRoomState();
    showLoading(false);
  }, 1000);
}

function getVideoInfo(videoId) {
  // Simulate video info - in real app this would be from YouTube API
  const videoDatabase = {
    'dQw4w9WgXcQ': {
      title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      duration: '3:32',
      channel: 'Rick Astley',
      views: '1.2B views'
    },
    '9bZkp7q19f0': {
      title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
      duration: '4:12',
      channel: 'officialpsy',
      views: '4.5B views'
    }
  };
  
  return videoDatabase[videoId] || {
    title: 'YouTube Video',
    duration: '0:00',
    channel: 'Unknown',
    views: '0 views'
  };
}

function updateVideoUI(videoInfo) {
  const videoTitle = document.getElementById('videoTitle');
  if (videoTitle) {
    videoTitle.textContent = videoInfo.title;
  }
  updateVideoProgress();
}

function updateVideoProgress() {
  if (youtubePlayer && youtubePlayer.getCurrentTime) {
    try {
      const currentTime = youtubePlayer.getCurrentTime();
      const duration = youtubePlayer.getDuration();
      
      const videoProgress = document.getElementById('videoProgress');
      const syncStatus = document.getElementById('syncStatus');
      
      if (duration > 0 && videoProgress) {
        videoProgress.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        
        // Update sync status
        if (syncStatus) {
          const syncDelay = Math.abs(currentTime - (currentRoom.videoState?.currentTime || 0));
          if (syncDelay > 3) {
            syncStatus.innerHTML = '🔴 Out of sync';
          } else if (syncDelay > 1) {
            syncStatus.innerHTML = '🟡 Syncing...';
          } else {
            syncStatus.innerHTML = '🟢 Synced';
          }
        }
      }
    } catch (e) {
      const videoProgress = document.getElementById('videoProgress');
      const syncStatus = document.getElementById('syncStatus');
      
      if (videoProgress) videoProgress.textContent = '0:00 / 0:00';
      if (syncStatus) syncStatus.innerHTML = '⚫ No video';
    }
  }
}

function onPlayerReady(event) {
  console.log('YouTube player ready');
  setInterval(updateVideoProgress, 1000);
}

function onPlayerStateChange(event) {
  if (syncInProgress) return;
  
  const state = event.data;
  const currentTime = youtubePlayer.getCurrentTime();
  
  switch (state) {
    case YT.PlayerState.PLAYING:
      broadcastMessage({
        type: 'video-play',
        data: { currentTime },
        user: currentUser,
        timestamp: Date.now()
      });
      showSyncNotification(`${currentUser.username} played the video`);
      break;
      
    case YT.PlayerState.PAUSED:
      broadcastMessage({
        type: 'video-pause',
        data: { currentTime },
        user: currentUser,
        timestamp: Date.now()
      });
      showSyncNotification(`${currentUser.username} paused the video`);
      break;
  }
  
  // Update room state
  currentRoom.videoState = {
    playing: state === YT.PlayerState.PLAYING,
    currentTime: currentTime,
    duration: youtubePlayer.getDuration(),
    lastUpdated: Date.now()
  };
  saveRoomState();
}

function handleVideoLoaded(data) {
  if (!currentRoom.currentVideo || data.videoId !== currentRoom.currentVideo.id) {
    loadYouTubeVideo(data.videoId);
    showSyncNotification(`New video loaded`);
  }
}

function handleVideoPlay(data) {
  if (!youtubePlayer) return;
  
  syncInProgress = true;
  
  const currentTime = youtubePlayer.getCurrentTime();
  if (Math.abs(currentTime - data.currentTime) > 2) {
    youtubePlayer.seekTo(data.currentTime);
  }
  
  if (youtubePlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
    youtubePlayer.playVideo();
  }
  
  setTimeout(() => {
    syncInProgress = false;
  }, 1000);
  
  showSyncNotification('Video synchronized');
}

function handleVideoPause(data) {
  if (!youtubePlayer) return;
  
  syncInProgress = true;
  
  const currentTime = youtubePlayer.getCurrentTime();
  if (Math.abs(currentTime - data.currentTime) > 2) {
    youtubePlayer.seekTo(data.currentTime);
  }
  
  if (youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) {
    youtubePlayer.pauseVideo();
  }
  
  setTimeout(() => {
    syncInProgress = false;
  }, 1000);
  
  showSyncNotification('Video synchronized');
}

function handleVideoSeek(data) {
  if (!youtubePlayer) return;
  
  syncInProgress = true;
  youtubePlayer.seekTo(data.currentTime);
  
  setTimeout(() => {
    syncInProgress = false;
  }, 1000);
  
  showSyncNotification(`Jumped to ${formatTime(data.currentTime)}`);
}

// Queue Management
function addVideoToQueue(url) {
  const videoId = extractVideoId(url);
  if (!videoId) {
    showNotification('Please enter a valid YouTube URL', 'error');
    return;
  }
  
  const videoInfo = getVideoInfo(videoId);
  const queueItem = {
    id: videoId,
    ...videoInfo,
    addedBy: currentUser.username,
    addedAt: Date.now()
  };
  
  videoQueue.push(queueItem);
  currentRoom.queue = [...videoQueue];
  currentUser.stats.videosAdded++;
  
  broadcastMessage({
    type: 'queue-updated',
    data: { queue: videoQueue, action: 'add', item: queueItem },
    user: currentUser,
    timestamp: Date.now()
  });
  
  renderQueue();
  updateVideoCount();
  saveRoomState();
  
  showNotification(`Added "${videoInfo.title}" to queue`);
  
  // If no video is playing, start this one
  if (!currentRoom.currentVideo) {
    playFromQueue(videoId);
  }
}

function playFromQueue(videoId) {
  loadYouTubeVideo(videoId);
  
  broadcastMessage({
    type: 'video-loaded',
    data: { videoId },
    user: currentUser,
    timestamp: Date.now()
  });
}

function removeFromQueue(videoId) {
  videoQueue = videoQueue.filter(item => item.id !== videoId);
  currentRoom.queue = [...videoQueue];
  
  broadcastMessage({
    type: 'queue-updated',
    data: { queue: videoQueue, action: 'remove', videoId },
    user: currentUser,
    timestamp: Date.now()
  });
  
  renderQueue();
  updateVideoCount();
  saveRoomState();
}

function handleQueueUpdated(data) {
  videoQueue = [...data.queue];
  currentRoom.queue = [...videoQueue];
  renderQueue();
  updateVideoCount();
  saveRoomState();
  
  if (data.action === 'add') {
    showNotification(`${data.item.addedBy} added a video to queue`, 'info');
  }
}

function renderQueue() {
  const queueContent = document.getElementById('queueContent');
  const queueList = document.getElementById('queueList');
  const containers = [queueContent, queueList].filter(Boolean);
  
  containers.forEach(container => {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (videoQueue.length === 0) {
      container.innerHTML = '<div class="queue-empty">Queue is empty</div>';
      return;
    }
    
    videoQueue.forEach((video, index) => {
      const queueElement = document.createElement('div');
      queueElement.className = `queue-item ${currentRoom.currentVideo?.id === video.id ? 'playing' : ''}`;
      queueElement.innerHTML = `
        <div class="queue-thumbnail">🎬</div>
        <div class="queue-info">
          <div class="queue-title">${video.title}</div>
          <div class="queue-meta">
            ${video.duration} • Added by ${video.addedBy}
          </div>
        </div>
        <div class="queue-actions">
          <button class="queue-action" onclick="playFromQueue('${video.id}')" title="Play">▶️</button>
          <button class="queue-action" onclick="removeFromQueue('${video.id}')" title="Remove">🗑️</button>
        </div>
      `;
      
      container.appendChild(queueElement);
    });
  });
}

// Voting System
function showVoteModal() {
  const voteModal = document.getElementById('voteModal');
  if (voteModal) {
    voteModal.classList.remove('hidden');
  }
}

function startVote(action) {
  if (currentVote) {
    showNotification('A vote is already in progress', 'warning');
    return;
  }
  
  currentVote = {
    id: Date.now(),
    action: action,
    votes: {},
    startedBy: currentUser.username,
    startTime: Date.now(),
    duration: 30000
  };
  
  broadcastMessage({
    type: 'vote-started',
    data: currentVote,
    user: currentUser,
    timestamp: Date.now()
  });
  
  showVoteProgress();
}

function castVote(action) {
  if (!currentVote || currentVote.votes[currentUser.id]) return;
  
  currentVote.votes[currentUser.id] = action;
  
  broadcastMessage({
    type: 'vote-cast',
    data: { voteId: currentVote.id, action, userId: currentUser.id },
    user: currentUser,
    timestamp: Date.now()
  });
  
  updateVoteUI();
}

function handleVoteStarted(data, user) {
  currentVote = data;
  showNotification(`${user.username} started a vote: ${data.action}`, 'info');
  showVoteProgress();
}

function handleVoteCast(data, user) {
  if (currentVote && currentVote.id === data.voteId) {
    currentVote.votes[data.userId] = data.action;
    updateVoteUI();
  }
}

function showVoteProgress() {
  const voteModal = document.getElementById('voteModal');
  if (voteModal) {
    voteModal.classList.remove('hidden');
    updateVoteUI();
    
    const timer = setInterval(() => {
      if (!currentVote) {
        clearInterval(timer);
        return;
      }
      
      const elapsed = Date.now() - currentVote.startTime;
      const remaining = Math.max(0, (currentVote.duration - elapsed) / 1000);
      
      const voteTimer = document.getElementById('voteTimer');
      if (voteTimer) {
        voteTimer.textContent = `${Math.ceil(remaining)}s remaining`;
      }
      
      if (remaining <= 0) {
        clearInterval(timer);
        endVote();
      }
    }, 1000);
  }
}

function updateVoteUI() {
  if (!currentVote) return;
  
  const votes = Object.values(currentVote.votes);
  const playVotes = votes.filter(v => v === 'play').length;
  const pauseVotes = votes.filter(v => v === 'pause').length;
  const skipVotes = votes.filter(v => v === 'skip').length;
  
  const playVotesEl = document.getElementById('playVotes');
  const pauseVotesEl = document.getElementById('pauseVotes');
  const skipVotesEl = document.getElementById('skipVotes');
  const voteStatus = document.getElementById('voteStatus');
  
  if (playVotesEl) playVotesEl.textContent = playVotes;
  if (pauseVotesEl) pauseVotesEl.textContent = pauseVotes;
  if (skipVotesEl) skipVotesEl.textContent = skipVotes;
  if (voteStatus) voteStatus.textContent = `${votes.length} / ${currentRoom.users.length} voted`;
}

function endVote() {
  if (!currentVote) return;
  
  const votes = Object.values(currentVote.votes);
  const playVotes = votes.filter(v => v === 'play').length;
  const pauseVotes = votes.filter(v => v === 'pause').length;
  const skipVotes = votes.filter(v => v === 'skip').length;
  
  let winner = 'no action';
  let maxVotes = 0;
  
  if (playVotes > maxVotes) {
    winner = 'play';
    maxVotes = playVotes;
  }
  if (pauseVotes > maxVotes) {
    winner = 'pause';
    maxVotes = pauseVotes;
  }
  if (skipVotes > maxVotes) {
    winner = 'skip';
    maxVotes = skipVotes;
  }
  
  // Execute vote result
  if (youtubePlayer && maxVotes > 0) {
    switch (winner) {
      case 'play':
        youtubePlayer.playVideo();
        break;
      case 'pause':
        youtubePlayer.pauseVideo();
        break;
      case 'skip':
        // Skip to next in queue
        const currentIndex = videoQueue.findIndex(v => v.id === currentRoom.currentVideo?.id);
        const nextVideo = videoQueue[currentIndex + 1];
        if (nextVideo) {
          playFromQueue(nextVideo.id);
        }
        break;
    }
  }
  
  showNotification(`Vote result: ${winner} (${maxVotes} votes)`);
  addSystemMessage(`Vote ended: ${winner} won with ${maxVotes} votes`);
  
  currentVote = null;
  const voteModal = document.getElementById('voteModal');
  if (voteModal) {
    voteModal.classList.add('hidden');
  }
}

// Settings Management
function showRoomSettings() {
  const roomSettingsModal = document.getElementById('roomSettingsModal');
  if (roomSettingsModal) {
    roomSettingsModal.classList.remove('hidden');
    
    // Update theme selection
    document.querySelectorAll('.theme-option').forEach(option => {
      option.classList.remove('active');
      if (option.getAttribute('data-theme') === currentTheme) {
        option.classList.add('active');
      }
    });
    
    // Update toggle states
    const chatSoundsToggle = document.getElementById('chatSoundsToggle');
    const syncNotificationsToggle = document.getElementById('syncNotificationsToggle');
    
    if (chatSoundsToggle) chatSoundsToggle.checked = chatSoundsEnabled;
    if (syncNotificationsToggle) syncNotificationsToggle.checked = syncNotificationsEnabled;
  }
}

function handleThemeChanged(data) {
  setRoomTheme(data.theme);
  showNotification(`Room theme changed to ${data.theme}`, 'info');
}

// Sidebar Navigation
function initializeSidebar() {
  const sidebarTabs = document.querySelectorAll('.sidebar-tab');
  sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchSidebarTab(targetTab);
    });
  });
}

function switchSidebarTab(tabName) {
  // Update tab buttons
  const sidebarTabs = document.querySelectorAll('.sidebar-tab');
  sidebarTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    }
  });
  
  // Update tab content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === `${tabName}Tab`) {
      content.classList.add('active');
    }
  });
}

// Storage and Persistence
function saveRoomState() {
  if (currentRoom) {
    const stateToSave = {
      ...currentRoom,
      users: currentRoom.users.map(user => ({
        ...user,
        lastSaved: Date.now()
      }))
    };
    
    try {
      localStorage.setItem(`room_${currentRoom.id}`, JSON.stringify(stateToSave));
    } catch (e) {
      console.warn('Failed to save room state:', e);
    }
  }
}

function copyRoomLink() {
  const url = `${window.location.origin}${window.location.pathname}#room=${currentRoom.id}`;
  navigator.clipboard.writeText(url).then(() => {
    showNotification('Room link copied to clipboard!');
  }).catch(() => {
    showNotification('Failed to copy link', 'error');
  });
}

// Event Listeners Setup
function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Home page
  const createRoomBtn = document.getElementById('createRoomBtn');
  const joinRoomBtn = document.getElementById('joinRoomBtn');
  const roomIdInput = document.getElementById('roomIdInput');
  
  if (createRoomBtn) {
    createRoomBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Create room button clicked');
      createRoom();
    });
  }
  
  if (joinRoomBtn) {
    joinRoomBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Join room button clicked');
      const roomId = roomIdInput ? roomIdInput.value.trim().toUpperCase() : '';
      joinRoom(roomId);
    });
  }
  
  if (roomIdInput) {
    roomIdInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const roomId = roomIdInput.value.trim().toUpperCase();
        joinRoom(roomId);
      }
    });
  }
  
  // Theme toggle
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  
  // Room page
  const joinWithDetailsBtn = document.getElementById('joinWithDetailsBtn');
  const usernameInput = document.getElementById('usernameInput');
  
  if (joinWithDetailsBtn) {
    joinWithDetailsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Join with details button clicked');
      joinWithDetails();
    });
  }
  
  if (usernameInput) {
    usernameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        joinWithDetails();
      }
    });
  }
  
  const loadVideoBtn = document.getElementById('loadVideoBtn');
  const videoUrlInput = document.getElementById('videoUrlInput');
  
  if (loadVideoBtn) {
    loadVideoBtn.addEventListener('click', () => {
      const url = videoUrlInput ? videoUrlInput.value.trim() : '';
      if (url) {
        addVideoToQueue(url);
        if (videoUrlInput) videoUrlInput.value = '';
      }
    });
  }
  
  if (videoUrlInput) {
    videoUrlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (loadVideoBtn) loadVideoBtn.click();
      }
    });
  }
  
  const sendMessageBtn = document.getElementById('sendMessageBtn');
  const messageInput = document.getElementById('messageInput');
  
  if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', sendMessage);
  }
  
  if (messageInput) {
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
  
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const leaveRoomBtn = document.getElementById('leaveRoomBtn');
  const roomSettingsBtn = document.getElementById('roomSettingsBtn');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  
  if (copyLinkBtn) copyLinkBtn.addEventListener('click', copyRoomLink);
  if (leaveRoomBtn) leaveRoomBtn.addEventListener('click', leaveRoom);
  if (roomSettingsBtn) roomSettingsBtn.addEventListener('click', showRoomSettings);
  if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', () => {
      const roomSettingsModal = document.getElementById('roomSettingsModal');
      if (roomSettingsModal) roomSettingsModal.classList.add('hidden');
    });
  }
  
  const voteBtn = document.getElementById('voteBtn');
  const closeVoteBtn = document.getElementById('closeVoteBtn');
  
  if (voteBtn) voteBtn.addEventListener('click', showVoteModal);
  if (closeVoteBtn) {
    closeVoteBtn.addEventListener('click', () => {
      const voteModal = document.getElementById('voteModal');
      if (voteModal) voteModal.classList.add('hidden');
    });
  }
  
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (youtubePlayer && youtubePlayer.getIframe) {
        const iframe = youtubePlayer.getIframe();
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        }
      }
    });
  }
  
  const toggleQueueBtn = document.getElementById('toggleQueueBtn');
  const videoQueue = document.getElementById('videoQueue');
  
  if (toggleQueueBtn && videoQueue) {
    toggleQueueBtn.addEventListener('click', () => {
      videoQueue.classList.toggle('collapsed');
      toggleQueueBtn.textContent = videoQueue.classList.contains('collapsed') ? '▲' : '▼';
    });
  }
  
  // Settings toggles
  const chatSoundsToggle = document.getElementById('chatSoundsToggle');
  const syncNotificationsToggle = document.getElementById('syncNotificationsToggle');
  
  if (chatSoundsToggle) {
    chatSoundsToggle.addEventListener('change', (e) => {
      chatSoundsEnabled = e.target.checked;
      localStorage.setItem('chatSounds', String(chatSoundsEnabled));
    });
  }
  
  if (syncNotificationsToggle) {
    syncNotificationsToggle.addEventListener('change', (e) => {
      syncNotificationsEnabled = e.target.checked;
      localStorage.setItem('syncNotifications', String(syncNotificationsEnabled));
    });
  }
  
  // Theme selector
  document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', () => {
      const theme = option.getAttribute('data-theme');
      document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      setRoomTheme(theme);
    });
  });
  
  // Vote options
  document.querySelectorAll('.vote-option').forEach(option => {
    option.addEventListener('click', () => {
      const action = option.getAttribute('data-action');
      castVote(action);
      option.classList.add('voted');
    });
  });
  
  // Browse videos placeholder
  const browseVideosBtn = document.getElementById('browseVideosBtn');
  if (browseVideosBtn && videoUrlInput && loadVideoBtn) {
    browseVideosBtn.addEventListener('click', () => {
      const popularVideos = [
        'dQw4w9WgXcQ', // Never Gonna Give You Up
        '9bZkp7q19f0'  // Gangnam Style
      ];
      const randomVideo = popularVideos[Math.floor(Math.random() * popularVideos.length)];
      videoUrlInput.value = `https://www.youtube.com/watch?v=${randomVideo}`;
      loadVideoBtn.click();
    });
  }
  
  console.log('Event listeners setup complete');
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    switch (e.key) {
      case ' ': // Spacebar - play/pause
        e.preventDefault();
        if (youtubePlayer) {
          try {
            if (youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) {
              youtubePlayer.pauseVideo();
            } else {
              youtubePlayer.playVideo();
            }
          } catch (e) {
            // Player not ready
          }
        }
        break;
      case 'Escape':
        // Close modals
        document.querySelectorAll('.modal').forEach(modal => {
          modal.classList.add('hidden');
        });
        break;
      case 'v':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          showVoteModal();
        }
        break;
    }
  });
}

// Window Event Handlers
function setupWindowEvents() {
  // Handle page refresh/close
  window.addEventListener('beforeunload', () => {
    if (currentRoom && currentUser) {
      broadcastMessage({
        type: 'user-left',
        user: currentUser,
        timestamp: Date.now()
      });
    }
  });
  
  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    const roomMatch = hash.match(/room=([A-Z0-9]{6})/);
    
    if (roomMatch) {
      const roomId = roomMatch[1];
      if (!currentRoom || currentRoom.id !== roomId) {
        initializeRoom(roomId, false);
      }
    } else if (currentRoom) {
      leaveRoom();
    }
  });
  
  // Handle visibility change (tab switching)
  document.addEventListener('visibilitychange', () => {
    if (currentUser && broadcastChannel) {
      const presence = document.hidden ? 'away' : 'online';
      broadcastMessage({
        type: 'user-presence',
        data: { presence },
        user: currentUser,
        timestamp: Date.now()
      });
    }
  });
}

// Periodic Tasks
function startPeriodicTasks() {
  // Video synchronization check
  setInterval(() => {
    if (youtubePlayer && currentRoom && currentRoom.videoState?.playing && !syncInProgress) {
      try {
        const currentTime = youtubePlayer.getCurrentTime();
        const expectedTime = currentRoom.videoState.currentTime + 
          ((Date.now() - (currentRoom.videoState.lastUpdated || Date.now())) / 1000);
        
        if (Math.abs(currentTime - expectedTime) > 3) {
          broadcastMessage({
            type: 'video-seek',
            data: { currentTime },
            user: currentUser,
            timestamp: Date.now()
          });
        }
        
        // Update state
        currentRoom.videoState.currentTime = currentTime;
        currentRoom.videoState.lastUpdated = Date.now();
      } catch (e) {
        // Player not ready
      }
    }
  }, 5000);
  
  // Save room state periodically
  setInterval(() => {
    if (currentRoom) {
      saveRoomState();
    }
  }, 30000);
}

// Application Initialization
function initializeApp() {
  console.log('Initializing app...');
  
  initializeTheme();
  populatePublicRooms();
  setupEventListeners();
  setupKeyboardShortcuts();
  setupWindowEvents();
  initializeChat();
  initializeSidebar();
  startPeriodicTasks();
  
  // Check if joining room from URL
  const hash = window.location.hash;
  const roomMatch = hash.match(/room=([A-Z0-9]{6})/);
  
  if (roomMatch) {
    const roomId = roomMatch[1];
    initializeRoom(roomId, false);
  }
  
  console.log('App initialization complete');
}

// Make functions globally available for onclick handlers
window.playFromQueue = playFromQueue;
window.removeFromQueue = removeFromQueue;

// Start the application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}