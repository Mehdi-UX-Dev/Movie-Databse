   import Netflix from '../public/Netflix.jpg'
  import jokerwall from '../public/jokerwall.jpg'
  import joker from '../public/joker.jpg'
  import poker from '../public/poker.jpg'
   import GodFather from '../public/GodFather.jpg'
   import Batman from '../public/Batman.jpg'
   import ironman from '../public/iron-man.jpg'
    import jokercard from '../public/jokercard.jpg'

  const gallery = [Netflix,jokerwall,joker,poker,GodFather,Batman,ironman,jokercard]


    const useImage = () => {
     const random = Math.floor(Math.random() * 9);
      return gallery[random]
    }
    
    export default useImage