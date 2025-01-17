import "./App.css";
import Card from "./components/card";

function App() {

  return (
    <>
      <div className="bg-black py-4 rounded-xl m-2">
        <div className="flex items-center justify-center max-w-6xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold">The Ape Collective</h1>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-around">
          <Card number='763' name='Ape-tastic Ace' price='150' img='https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/faf687be44e58fdf8a6c3f69062f268c-1.png.webp' />
          <Card number='468' name='Banana Baron' price='175' img='https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/2-1.png.webp' />
          <Card number='934' name='Jungle Jester' price='130' img='https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/7bd01f7b2ba60ab9c6a97d9a0037b70e-1.png.webp' />
        </div>

        <div className="flex justify-around">
          <Card number='875' name='Primate Picasso' price='250' img='https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/a76aab241c1a89a853f407ccee730a8f-1.png.webp' />
          <Card number='623' name='Swing King' price='180' img='https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/679.png.webp' />
          <Card number='567' name='Coconut Crusader' price='160' img='https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/93f114269d5c8a6dacbcf587e4b4c493-1.png.webp' />
        </div>

        <div className="flex justify-around">
          <Card number='039' name='Vine Virtuoso' price='190' img='https://i.seadn.io/gae/mYOrYP8zndwG60ykheVeu_PtOfWLaemlw43KuB1wVQSUe7dGZoFER1Id1lcpw8lbcNj-I3cvuIoxADXxOu18Jnot6zLdF4ZrxKxK?auto=format&dpr=1&w=640' />
          <Card number='638' name='Vine Virtuoso' price='190' img='https://i.seadn.io/gae/2xYwYxZe31xQqSHIAPJiBuCCC2HVf2PR5GZxaWClYG9z0zKP_D9_cAhe9C_8egFhnE5feYMR5aRoiqN4axC54mRmercpxQhqRnIdPGE?auto=format&dpr=1&w=640' />
          <Card number='125' name='Vine Virtuoso' price='190' img='https://i.seadn.io/gae/trV7r98Icq7bdLorZUXC7iJUTy12ONl2ajdZXKAgks5EbAkUDCcpTgVz9Srg93aQoVKm5bQsvhDyDcfoSmFFEOiNFQpam5QIllCEAQE?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='463' name='Jungle Nomad' price='230' img='https://i.seadn.io/gae/cdKWxDPySCNr6IknWNn5PFpTsPZ496B2qwHEsNquMUe9LhBKFfxARY_hrptQLBIPA8iuBNrFbv3mtrZFA425bmywDpIY1vbWuMgBjQ?auto=format&dpr=1&w=640' />
          <Card number='364' name='Tree Toppe' price='340' img='https://i.seadn.io/gae/-geP-y0oIGJy7z_YHlTekH2hGW5i3YlfjxvE79L44K9V1krbM7X_ZfqAu3ukbE7sffj3KN3E9IVRE8mar6sFlUHkQ6pnQxXxi2-fvA?auto=format&dpr=1&w=640' />
          <Card number='290' name='Mango Marauder' price='270' img='https://i.seadn.io/gae/eiuIXDFisL4xZRPbzlmf394K911DaX6JF1s0lRD8GnDCz9s0ZbS4sK0RIMpqMS5mTqECT0ZFoizCaOhcsp-R4h75rw-mdBLdtWyK?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='546' name='Zen Gorilla' price='100' img='https://i.seadn.io/gae/_C1iych8Wm0RMFAKgi2Hsv4wvANhWsgNg2vq6aYRmEpFdxlajEBVE9GltFT8-inOTMTDJBJH2NCGD6IXT8A4QU1iwX8X6ZOFpmWM?auto=format&dpr=1&w=640' />
          <Card number='289' name='Safari Shadow' price='150' img='https://i.seadn.io/gae/nthWcyiedcPT-Dil8sS_y2EZWWr_E84TfInMaHc_0MOE1iXVEbjApUqvUl15Eb33YQOT4Dvn9d_6t_VcObiKbMbwqS3jIiuTXeqD?auto=format&dpr=1&w=640' />
          <Card number='578' name='Monkey Maestro' price='190' img='https://i.seadn.io/gae/TMrwtR6UNyg_w0_0xxGs0mb2gtjG-6GmsICzjYW7y4cl9KybaeJNTJ8w3jixNooMgvuCydiW0d4FS-38Vv91kDNZ3cSTJAPqZhY_Cg?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='854' name='Banana Tycoon' price='90' img='https://i.seadn.io/gae/-ySAh69y3FrFBryXVkMNn6S_AwYczezHEbwt1P4AZGTL8ZxY1gS1DFzcHZOJBtqyvmGiRznUupe9g1Kuelsh-15iOxosoJCE8vMTwQ?auto=format&dpr=1&w=640' />
          <Card number='328' name='Swingin Star' price='120' img='https://i.seadn.io/gae/hNAsVr5zF30uk5vIGpac92JlV3VXRmKtaqA00k0zJbzfqypOtuMgFJ5cO0c73kTRcGAymHyek0YoO7y72oCFaGjxCHnlh_F1New4dEU?auto=format&dpr=1&w=640' />
          <Card number='291' name='Congo King' price='140' img='https://i.seadn.io/gae/F3vjvrMTIjVfi80UpBAwkC5vKLCne3pQpTFOWagse5U9SUMFTEWF5sSifyS5QnivXIyYeBXIQn4MJuC1dESHh05ogxIILrl2yn9LlA?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='256' name='Jungle Juggler' price='180' img='https://i.seadn.io/gae/IapNY_rR2jtJOYZj8ojEEOhHHWcg59U7wP1Pk6imiUjM2SicXDvPeQS7TUr8k3v7qFduQvCAapm3CqtcSdRZFL_vecewtQ2GOMT4UQ?auto=format&dpr=1&w=640' />
          <Card number='348' name='Primate Pioneer' price='220' img='https://i.seadn.io/gae/IlfpDa3JY3hD7pX7JdImQ84rT3xZnouelZDhlzYyXsORCZuIX2SoR6Qt1RmV-qJTRihGVIC-fgq9XalllcGd4_xBerBueR-9YAYlfA?auto=format&dpr=1&w=640' />
          <Card number='432' name='Banana Blaster' price='150' img='https://i.seadn.io/gae/xqBwJ1Sg4bUfLTv4ns57Mre3ikSxBG7IXXnZcpwYxWozYDTYLOtbv3xrakmInsDk_ANroalFiGx3sZXHft0unKo8vAbrll_MeWHUOA?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='576' name='Treetop Titan' price='270' img='https://i.seadn.io/gae/EsrJ-5Y61pdBmhJNTpGEdQtjIRaKKc-gGnVdRoauJ8Wx4MzTvon4dbYSxKnjtqvwuYbHW31eOaIcMNWWX3pmDZ-49OsxdB7ZZQnQ?auto=format&dpr=1&w=640' />
          <Card number='783' name='Monkey Mystic' price='300' img='https://i.seadn.io/gae/-ySAh69y3FrFBryXVkMNn6S_AwYczezHEbwt1P4AZGTL8ZxY1gS1DFzcHZOJBtqyvmGiRznUupe9g1Kuelsh-15iOxosoJCE8vMTwQ?auto=format&dpr=1&w=640' />
          <Card number='491' name='Savanna Sultan' price='190' img='https://i.seadn.io/gae/hNAsVr5zF30uk5vIGpac92JlV3VXRmKtaqA00k0zJbzfqypOtuMgFJ5cO0c73kTRcGAymHyek0YoO7y72oCFaGjxCHnlh_F1New4dEU?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='682' name='Galaxy Hunter' price='300' img='https://i.seadn.io/gae/yM6Gn1sMp1TpLT4ichk3aLmC6b1QwS8UPw9yHRKVYzoLkwmrikpWk3Q4JXQPq6CIVQumQXc6IfdV4ZcETpQnEWBpFL-4U8i7kAl8aA?auto=format&dpr=1&w=640' />
          <Card number='245' name='Lunar Explorer' price='220' img='https://i.seadn.io/gae/l2eiQ0vWlgdyvdwHO7hXY1E1CD_q7rZFuZlicnhEqke3soCIPqd2lZZT84H4n3DxaFNGZjn0aNb3obAO1EKbmcDtUH4jdGy7eHj7GA?auto=format&dpr=1&w=640' />
          <Card number='507' name='Stellar Voyager' price='400' img='https://i.seadn.io/gae/b85L2eV6fxbBgj-fC8iRcRLes-bL6amFXobtkcImBfpK-kZ9jR2cjrdDkn0upLsVnA0aH5xV3fw8KxMVGEXmFx29z2mZETX0ReOLhw?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='358' name='Cosmic Champion' price='500' img='https://i.seadn.io/gae/ZjRROPc_uijUHd15LKyfPL-O4HLXt4tHnZqbjYsAAtDP14022yO0QsDobwfnNg1DG2_0mEFjHUZLJhgQ349gOCuyvk__BX-LxlZxGKU?auto=format&dpr=1&w=640' />
          <Card number='634' name='Nebula Nomad' price='320' img='https://i.seadn.io/gae/b13F4kW6XVijEqJ04nuwM9h6p3eumwvKurqujfqPk3AUeOcoJJfroKafRQiSIz0QRu4pzjnWBzhBPYM-YtDdjzGS42XTiHSWiOjPVg?auto=format&dpr=1&w=640' />
          <Card number='189' name='Astro Adventurer' price='280' img='https://i.seadn.io/gae/JMcnADloNsRcnV_1ZR5BxbQSHM6YGf2hAeA9pMD00UsgciC8OPNu7_HD7ujDXWACvZY3lXKIIKcV_7fCQkVN2vXAVybuOYdRLekebg?auto=format&dpr=1&w=640' />
        </div>

        <div className="flex justify-around">
          <Card number='974' name='Planet Pioneer' price='350' img='https://i.seadn.io/gae/UbbRdlYn4vGgnylqzb6HcD7uK3lvVwCOvzwbgTKzj1xmgbn2seJqOOwmW2Ibm0VYX8EvG1hXT_uqJ3H0ylATJp_FNIr7ddyUZQQy?auto=format&dpr=1&w=640' />
          <Card number='592' name='Orbit Overlord' price='450' img='https://i.seadn.io/gae/OjFxIyBtNGtm-ZLXOXtYuoGGnkUB0OvBUkdBqiHNtcMkEuGwNY7KQnvtBqwNk1YD4G6tJ0JYxO1HhivzjRoHdxHDluPCSdY1ejuMqQ?auto=format&dpr=1&w=640' />
          <Card number='763' name='Comet Commander' price='380' img='https://i.seadn.io/gae/u-SJBRE8N4c_XfuMCVQNeo8LNtNdYH0JvQwF2Ep4hjb7AFKVmYEyJ40bBaVrGGmTFqUYAiixXIPdonBxlkd0Wunuwdq3P4wmWYBRgQ?auto=format&dpr=1&w=640' />
        </div>

      </div>
    </>
  );
}

export default App;
