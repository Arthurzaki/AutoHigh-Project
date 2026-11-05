export const rupiah=(n)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(n)||0);
export const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
export const monthKey=(d=today())=>d.slice(0,7);
export const tgl=(d)=>(d?new Date(`${d.slice(0,10)}T12:00:00`).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}):'-');
