import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
const NAV = [
  {to:'/',label:'Dashboard',icon:'grid'},
  {to:'/booking',label:'Booking Kendaraan',icon:'calendar'},
  {to:'/transaksi',label:'Transaksi',icon:'receipt'},
  {to:'/pembukuan',label:'Pembukuan',icon:'wallet'},
  {to:'/kehadiran',label:'Kehadiran Karyawan',icon:'users'},
];
export default function Layout(){
 const [mobile,setMobile]=useState(false);
 const {pathname}=useLocation();
 const active=NAV.find(x=>x.to===pathname)?.label||'Dashboard';
 return <div className="app-shell">
   {mobile && <button className="mobile-shade" aria-label="Tutup menu" onClick={()=>setMobile(false)}/>}
   <aside className={`sidebar ${mobile?'sidebar-open':''}`}>
     <div className="brand"><div className="brand-logo"><img src="/autohigh-logo.png" alt="AutoHigh" /></div><div className="brand-copy"><b>AUTO<span>HIGH</span></b><small>ULTIMATE COATING & DETAILING</small></div></div>
     <div className="side-caption">MENU UTAMA</div>
     <nav className="nav-list">{NAV.map(x=><NavLink key={x.to} end={x.to==='/'} to={x.to} onClick={()=>setMobile(false)} className={({isActive})=>`nav-link ${isActive?'nav-active':''}`}><Icon name={x.icon} size={19}/><span>{x.label}</span>{pathname===x.to&&<i/>}</NavLink>)}</nav>
     <div className="sidebar-bottom"><div className="workshop-chip"><span className="live-dot"/> WORKSHOP MANAGEMENT <span className="workshop-city">CIKARANG</span></div><div className="owner"><div className="owner-avatar">AH</div><div><strong>AutoHigh Admin</strong><small>Pengelola workshop</small></div><Icon name="shield" size={16} className="owner-shield"/></div></div>
   </aside>
   <div className="workspace"><header className="topbar"><div className="topbar-left"><button className="mobile-menu icon-button" onClick={()=>setMobile(true)} aria-label="Buka menu"><Icon name="menu"/></button><div className="breadcrumbs">AutoHigh <span>/</span> <strong>{active}</strong></div></div><div className="topbar-right"><div className="topbar-date"><Icon name="calendar" size={15}/>{new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'long',year:'numeric'}).format(new Date())}</div><span className="topbar-divider"/><div className="topbar-profile"><span className="profile-avatar">AH</span><div><b>Administrator</b><small>AutoHigh Cikarang</small></div></div></div></header><main className="page-content"><Outlet/></main><footer className="footer">© {new Date().getFullYear()} AutoHigh · Ultimate Coating & Detailing <span>Operational Management System</span></footer></div>
 </div>
}
