import { useCallback, useEffect, useState } from "react";

type TeamType = {
  name: string;
  backgroundColor: string;
  teamId: number;
  value: number;
};

function App() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const f = async () => {
      const response = await fetch(
        "https://jcbl-score.com/api/v2/league/cap_baseball/season/34"
      );
      const res = await response.json();
      setData(res);
    };
    f();
  }, []);

  const calcRank = useCallback(
    (
      data: any[],
      param: string,
      sliceNum: number,
      order: "asc" | "desc",
      regulationParam: "tpa" | "inning",
      regulationNum?: number
    ) => {
      if (!data) return [];
      const target = data
        .filter((player) => {
          if (regulationNum) {
            return player[regulationParam] >= regulationNum;
          } else {
            return true;
          }
        })
        .sort((a, b) => {
          if (order === "asc") {
            return a[param] - b[param];
          } else {
            return b[param] - a[param];
          }
        });
      if (target.length > sliceNum) {
        if (order === "desc") {
          return target.filter((player) => {
            return player[param] >= target[sliceNum - 1][param];
          });
        } else {
          return target.filter((player) => {
            return player[param] <= target[sliceNum - 1][param];
          });
        }
      } else {
        return target;
      }
    },
    []
  );

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
  const winds=[
    {
      name: "早大臙脂",
      backgroundColor: "#9B003F",
      id: 162,
      result: [7, 5, 0],
    },
    {
      name: "アルパコラ",
      backgroundColor: "#DC143C",
      id: 58,
      result: [1, 10, 1],
    },
    {
      name: "横国みなと",
      backgroundColor: "#1955A6",
      id: 57,
      result: [9, 2, 1],
    },
    {
      name: "横国みらい",
      backgroundColor: "#1955A6",
      id: 57,
      result: [8, 2, 2],
    },
    {
      name: "生田農工大",
      backgroundColor: "#483698",
      id: 61,
      result: [6, 6, 0],
    },
    {
      name: "三田",
      backgroundColor: "#001E62",
      id: 106,
      result: [8, 2, 2],
    },
    {
      name: "Eintracht/上智",
      backgroundColor: "#ED591A",
      id: 202,
      result: [4, 8, 0],
    },
    {
      name: "千葉/専修",
      backgroundColor: "#C6002F",
      id: 111,
      result: [2, 10, 0],
    },
    {
      name: "千葉/専修",
      backgroundColor: "#C6002F",
      id: 320,
      result: [2, 10, 0],
    },
    {
      name: "専修",
      backgroundColor: "#3fd021",
      id: 251,
      result: [2, 10, 0],
    },
  ]
  // const winds = [
  //   {
  //     name: "早大紺碧",
  //     backgroundColor: "#9B003F",
  //     id: 162,
  //     result: [10, 1, 1],
  //   },
  //   {
  //     name: "横国ときわ",
  //     backgroundColor: "#1955A6",
  //     id: 57,
  //     result: [9, 1, 0],
  //   },
  //   {
  //     name: "城東",
  //     backgroundColor: "#00007B",
  //     id: 232,
  //     result: [8, 4, 0],
  //   },
  //   {
  //     name: "短冊",
  //     backgroundColor: "#DC143C",
  //     id: 58,
  //     result: [3, 7, 0],
  //   },
  //   {
  //     name: "世田谷",
  //     backgroundColor: "#1D6D3F",
  //     id: 65,
  //     result: [2, 9, 1],
  //   },
  //   {
  //     name: "東京大",
  //     backgroundColor: "#ADD8E6",
  //     id: 155,
  //     result: [2, 7, 3],
  //   },
  //   {
  //     name: "目白",
  //     backgroundColor: "#79CAFF",
  //     id: 73,
  //     result: [4, 7, 1],
  //   },
  //   {
  //     name: "青山学院大",
  //     backgroundColor: "#277559",
  //     id: 239,
  //     result: [5, 7, 0],
  //   },
  // ];

  const Teams: React.FC<{ title: string; teams: TeamType[] }> = ({
    teams,
    title,
  }) => {
    return (
      <>
        <div
          style={{
            width: 200,
            fontSize: 20,
            boxShadow: "gray 5px 5px 5px",
            textAlign: "center",
            paddingTop: 15,
          }}
        >
          {title}
        </div>
        <div
          style={{
            //height: 50 * 5,
          }}
        >
          <div>
            {teams.map((team, idx) => (
              <div>
                <div
                  className="team"
                  style={{
                    display: "flex",
                    zIndex: 10000,
                    height: 40,
                    width: 195,
                    margin: 5,
                    backgroundColor: team.backgroundColor,
                    boxShadow: "gray 5px 5px 5px",
                    //transform: "translateY(-800px)",
                    //animation: `move${idx} 1s ease-out ${8 - idx}s forwards`,
                  }}
                >
                  <CircleIcon
                    thumbnail_url={`https://cap-baseball.com/images/${team.teamId}.jpg`}
                    width={30}
                  />
                  <div
                    style={{
                      color: "white",
                      fontSize: 18,
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
                      fontSize: 18,
                      height: 74,
                      fontWeight: "bold",
                      textAlign: "right",
                      width:'20%',
                      marginRight:5
                    }}
                  >
                    {team.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const decideTeam = (league:any[], player:any)=>{
    const target = league.filter((team) => {
      return team.id === player.teamId;
    })
    const target2 = league.filter((team) => {
      return team.id === player.myteam_id;
    })
    if(target[0]){
      return target[0]
    } else{
      return target2[0]
    }
      
  }

  if (!data) return <></>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div>
        <Teams
          title="Shine/打率"
          teams={calcRank(
            data.battingResultList,
            "average",
            5,
            "desc",
            "tpa",
            22.3
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player).id,
              backgroundColor: decideTeam(winds, player).backgroundColor,
              value: player.average.toFixed(3),
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/本塁打"
          teams={calcRank(
            data.battingResultList,
            "homerun",
            5,
            "desc",
            "tpa",
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player)?.id,
              backgroundColor: decideTeam(winds, player)?.backgroundColor,
              value: player.homerun,
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/安打"
          teams={calcRank(
            data.battingResultList,
            "hit",
            5,
            "desc",
            "tpa",
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player).id,
              backgroundColor: decideTeam(winds, player).backgroundColor,
              value: player.hit,
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/打点"
          teams={calcRank(
            data.battingResultList,
            "rbi",
            5,
            "desc",
            "tpa",
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player)?.id,
              backgroundColor: decideTeam(winds, player)?.backgroundColor,
              value: player.rbi,
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/防御率"
          teams={calcRank(
            data.pitchingResultList,
            "era",
            5,
            "asc",
            "inning",
            9.33
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player).id,
              backgroundColor: decideTeam(winds, player).backgroundColor,
              value: player.era.toFixed(2),
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/勝利"
          teams={calcRank(
            data.pitchingResultList,
            "win",
            5,
            "desc",
            "inning",
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player).id,
              backgroundColor: decideTeam(winds, player).backgroundColor,
              value: player.win,
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/セーブ"
          teams={calcRank(
            data.pitchingResultList,
            "save",
            5,
            "desc",
            "inning",
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player).id,
              backgroundColor: decideTeam(winds, player).backgroundColor,
              value: player.save,
            };
          })}
        />
      </div>
      <div>
        <Teams
          title="Shine/奪三振"
          teams={calcRank(
            data.pitchingResultList,
            "strike_out",
            5,
            "desc",
            "inning",
          ).map((player) => {
            return {
              name: player.real_name,
              teamId: decideTeam(winds, player).id,
              backgroundColor: decideTeam(winds, player).backgroundColor,
              value: player.strike_out,
            };
          })}
        />
      </div>
    </div>
  );
}

export default App;
