import React from 'react';
const paths = {
 grid:<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
 calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
 receipt:<><path d="M4 3h16v18l-4-2-4 2-4-2-4 2V3Z"/><path d="M8 9h8M8 13h8"/></>,
 wallet:<><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 9V5a2 2 0 0 1 2-2h13M16 14h5M16 14h.01"/></>,
 users:<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.1a4 4 0 0 1 0 7.8M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></>,
 car:<><path d="m5 11 2-6h10l2 6M3 11h18v8H3zM5 19v2M19 19v2M7 15h2M15 15h2"/></>,
 arrow:<path d="M5 12h14m-6-6 6 6-6 6"/>,
 plus:<path d="M12 5v14M5 12h14"/>,
 bell:<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
 search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
 check:<path d="m5 12 4 4L19 6"/>,
 clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
 trend:<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>,
 download:<><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/></>,
 settings:<><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1A7 7 0 0 0 15 6l-.4-2.6h-4.2L10 6a7 7 0 0 0-1.5 1l-2.4-1-2 3.5 2 1.5a7 7 0 0 0 0 2L4 14.5l2 3.5 2.4-1A7 7 0 0 0 10 18l.4 2.6h4.2L15 18a7 7 0 0 0 1.5-1l2.4 1 2-3.5-2-1.5a7 7 0 0 0 .1-1Z"/></>,
 menu:<path d="M4 6h16M4 12h16M4 18h16"/>,
 close:<path d="M5 5l14 14M19 5 5 19"/>,
 spark:<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>,
 filter:<path d="M4 7h16M7 12h10M10 17h4"/>,
 shield:<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>
};
export default function Icon({name,size=19,className=''}) {return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name] || paths.grid}</svg>}
