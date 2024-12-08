import "./List.css"

export default function List({ items }){
   return (
       <ul>
        {items.map((item) => <li key={item.field}>{item.field}&nbsp;&nbsp;<span>{item.value}</span></li>)}
       </ul>
   )
}