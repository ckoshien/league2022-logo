type TeamType = {
  name: string;
  backgroundColor: string;
  id: number;
  result: number[];
};

function App() {
  const CircleIcon: React.FC<{ thumbnail_url: string; width: number }> = ({
    thumbnail_url,
    width,
  }) => {
    return (
      <div
        style={{
          width: width,
          height: width,
          border: "2px solid white",
          backgroundSize: `${width}px ${width}px`,
          backgroundImage: `url(${thumbnail_url}), url('/images/petbottle_cap.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          display: "inline-block",
          borderRadius: "50%",
          margin: 2,
        }}
      ></div>
    );
  };
  // const shines = [
  //   {
  //     name: "早大臙脂",
  //     backgroundColor: "#9B003F",
  //     id: 162,
  //     result: [3, 1, 0],
  //   },
  //   {
  //     name: "アルパコラ",
  //     backgroundColor: "#DC143C",
  //     id: 58,
  //     result: [1, 4, 1],
  //   },
  //   {
  //     name: "横国みなと",
  //     backgroundColor: "#1955A6",
  //     id: 57,
  //     result: [5, 2, 1],
  //   },
  //   {
  //     name: "横国みらい",
  //     backgroundColor: "#1955A6",
  //     id: 57,
  //     result: [3, 2, 1],
  //   },
  //   {
  //     name: "生田農工大",
  //     backgroundColor: "#483698",
  //     id: 61,
  //     result: [4, 4, 0],
  //   },
  //   {
  //     name: "三田",
  //     backgroundColor: "#001E62",
  //     id: 106,
  //     result: [5, 0, 1],
  //   },
  //   {
  //     name: "上智/Eintracht",
  //     backgroundColor: "#ED591A",
  //     id: 202,
  //     result: [2, 6, 0],
  //   },
  //   {
  //     name: "千葉/専修",
  //     backgroundColor: "#C6002F",
  //     id: 111,
  //     result: [1, 5, 0],
  //   },
  // ];
  const winds = [
    {
      name: "賀茂別雷",
      backgroundColor: "#173be6",
      id: 206,
      result: [4, 1, 1],
    },
    {
      name: "京大嵐山",
      backgroundColor: "#23232b",
      id: 72,
      result: [7, 1, 0],
    },
    {
      name: "京大宇治",
      backgroundColor: "#23232b",
      id: 72,
      result: [7, 1, 0],
    },
    {
      name: "大阪公立大COMUC",
      backgroundColor: "#3b0e83",
      id: 230,
      result: [7, 1, 0],
    },
    {
      name: "京大貴船",
      backgroundColor: "#23232b",
      id: 72,
      result: [7, 1, 0],
    },
    {
      name: "龍谷立命近大連合",
      backgroundColor: "#f66f59",
      id: 0,
      result: [7, 1, 0],
    },
    {
      name: "大阪大",
      backgroundColor: "#0b1430",
      id: 105,
      result: [7, 1, 0],
    },
    {
      name: "名古屋大",
      backgroundColor: "#53783c",
      id: 85,
      result: [7, 1, 0],
    },
  ];

  const Teams: React.FC<{ title: string; teams: TeamType[] }> = ({
    teams,
    title,
  }) => {
    return (
      <>
        <div
          style={{
            width: 605,
            fontSize: 42,
            boxShadow: "gray 5px 5px 5px",
            textAlign: "center",
            paddingTop: 15,
          }}
        >
          {title}
        </div>
        <div
          style={{
            height: 80 * 8,
          }}
        >
          <div>
            {teams
              // .sort((a, b) => {
              //   if(a.result[0] + a.result[1] === 0 && b.result[0] + b.result[1] === 0){
              //     return 0;
              //   }
              //   if(a.result[0] + a.result[1] === 0){
              //     return 1;
              //   }
              //   if(b.result[0] + b.result[1] === 0){
              //     return -1;
              //   }
              //   if(b.result[0] / (b.result[0] + b.result[1]) ===
              //   a.result[0] / (a.result[0] + a.result[1])){
              //     return b.result[0] - a.result[0];
              //   }
              //   return (
              //     b.result[0] / (b.result[0] + b.result[1]) -
              //     a.result[0] / (a.result[0] + a.result[1])
              //   );
              // })
              .map((team, idx) => (
                <div>
                  <div
                    className="team"
                    style={{
                      display: "flex",
                      zIndex: 10000,
                      height: 74,
                      width: 600,
                      margin: 5,
                      backgroundColor: team.backgroundColor,
                      opacity: team.result[0] + team.result[1] === 0 ? 0.3 :1,
                      boxShadow: "gray 5px 5px 5px",
                      transform: "translateY(-800px)",
                      animation: `move${idx} 1s ease-out ${8 - idx}s forwards`,
                    }}
                  >
                    <CircleIcon
                      thumbnail_url={`https://cap-baseball.com/images/${team.id}.jpg`}
                      width={64}
                    />
                    <div
                      style={{
                        color: "white",
                        fontSize: 40,
                        height: 74,
                        padding: "0 5px",
                        fontWeight: "bold",
                        width: "60%",
                      }}
                    >
                      {team.name}
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: 30,
                        height: 74,
                        fontWeight: "bold",
                      }}
                    >
                      {idx + 1}位
                      {/* {team.result[0]}勝{team.result[1]}敗{team.result[2]}分 */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <Teams title="Welcome Cap Festa 2022" teams={winds} />
      </div>
      {/* <div>
        <Teams title="Shineリーグ" teams={shines} />
      </div> */}
      <style>
        {[0,1,2,3,4,5,6,7].map((team, idx) => (
          <>
            {`@keyframes move${idx} {
                0% {
                    transform: translateY(-405px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
              `}
          </>
        ))}
      </style>

      {/* <div
        style={{
          animation: `string-fade 3s ease-out ${winds.length * 0.5 + 3}s forwards`,
          opacity: 0,
          position: 'relative'
        }}
      >
        <img
          width={1440}
          height={400}
          src={'/league2022-logo/sakurafubuki-bg-768x576.jpg'}
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top:0,
            opacity: 0.4
          }}
        />
        <div
          style={{
            height: 140,
            width: winds.length*79,
            fontSize: 70,
            paddingTop: 60,
            textAlign: "center",
            fontWeight: 'bold',
            position: 'absolute'
          }}
        >
          仲間とつかめ、<span style={{
            animation: `spring 2s ease-out ${winds.length * 0.5 + 4}s forwards`,
            color: 'black'
          }}>春</span>の栄冠。
        </div>
        <div
          style={{
            height: 140,
            fontSize: 44,
            textAlign: "center",
            width: winds.length*74,
            position: 'absolute',
            top:230
          }}
        >
          関東キャップリーグ 2022 春季
        </div>
        <div
          style={{
            height: 140,
            fontSize: 34,
            textAlign: "center",
            width: winds.length*79,
            position: 'absolute',
            top: 350
          }}
        >
          5/21[土]～8/20[土]
        </div>
      </div> */}
    </div>
  );
}

export default App;
