/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background: #121212;
    color: #E0E0E0;
    margin: 0;
    padding: 0;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: rgba(20, 20, 20, 0.9);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #00AEEF;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background: rgba(20, 20, 20, 0.95);
    padding: 10px;
    border-radius: 5px;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

/* Main Content */
main {
    text-align: center;
    padding: 100px 20px;
}

.simulation-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
}

.simulation-card {
    background: #1E1E1E;
    padding: 20px;
    border-radius: 8px;
    text-decoration: none;
    color: white;
    transition: transform 0.3s;
}

.simulation-card:hover {
    transform: scale(1.05);
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background: #1E1E1E;
}
