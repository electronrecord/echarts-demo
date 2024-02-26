export const BaseButton = function ({text, onClick}) {
  return (
    <button onClick={onClick}>{ text }</button>
  )
}