export default function List({ items }){
   return (
       <ul>
        {items.map((item) => <li key={item.field}>{item.field}<span>{item.value}</span></li>)}
       </ul>
   )
}