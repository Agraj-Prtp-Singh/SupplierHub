import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">
          SupplierHub<span>.</span>
        </h2>

        <p className="menu-label">WORKSPACE</p>

        <nav>
          <a className="nav-item active" href="#">
            Overview
          </a>
          <a className="nav-item" href="#">
            Suppliers
          </a>
          <a className="nav-item" href="#">
            Products
          </a>
          <a className="nav-item" href="#">
            Categories
          </a>
          <a className="nav-item" href="#">
            Contacts
          </a>
        </nav>

        <p className="menu-label">MANAGEMENT</p>

        <nav>
          <a className="nav-item" href="#">
            Orders
          </a>
          <a className="nav-item" href="#">
            Commissions
          </a>
          <a className="nav-item" href="#">
            Reports
          </a>
        </nav>

        <div className="sidebar-bottom">
          <p>SupplierHub</p>
          <small>Business Management System</small>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / Overview</p>
            <h1>Good afternoon 👋</h1>
            <p className="subtitle">
              Here's what's happening with your business.
            </p>
          </div>
          <button className="add-button">+ Add Supplier</button>
        </header>

        <section className="stats">
          <div className="stat-card">
            <p>Total Suppliers</p>
            <h2>0</h2>
            <small>All registered suppliers</small>
          </div>

          <div className="stat-card">
            <p>Active Partners</p>
            <h2>0</h2>
            <small>Successfully partnered</small>
          </div>

          <div className="stat-card">
            <p>Pending Responses</p>
            <h2>0</h2>
            <small>Awaiting supplier replies</small>
          </div>

          <div className="stat-card">
            <p>Total Products</p>
            <h2>0</h2>
            <small>Products in your catalogue</small>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <div>
              <h2>Recent Suppliers</h2>
              <p>Your recently added supplier records.</p>
            </div>
            <button className="secondary-button">View all</button>
          </div>

          <div className="empty-state">
            <div className="empty-icon">▤</div>
            <h3>No suppliers yet</h3>
            <p>Your supplier records will appear here once you add them.</p>
            <button className="add-button">+ Add your first supplier</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
