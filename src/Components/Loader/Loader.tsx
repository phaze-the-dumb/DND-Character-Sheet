import './Loader.css'

let Loader = () => {
  let loader: HTMLElement;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.fontSize = '15px';
      loader.style.opacity = '0';
  
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 500);
  })

  return (
    <div class="loader" ref={( el ) => loader = el }>
      Loading...
    </div>
  )
}

export default Loader