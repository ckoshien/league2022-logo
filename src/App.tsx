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

  const alignment = 750;
  const KantoLogo = () => {
    return (
      <>
        <img
          src={"https://cap-baseball.com/images/JCBA_white.png"}
          style={{
            width: 200,
            position: "absolute",
            left: (500 - 200) / 2 + alignment,
            top: 180,
          }}
        />
        <span
          style={{
            position: "absolute",
            left: (500 - 200) / 2 + alignment,
            top: 270,
            color: "white",
            fontSize: 24,
          }}
        >
          {"Kanto Cap League"}
        </span>
        <span
          style={{
            position: "absolute",
            left: 220 + alignment,
            top: 310,
            color: "white",
            fontSize: 14,
          }}
        >
          {"since 2019"}
        </span>
      </>
    );
  };

  const KansaiLogo = () => {
    return (
      <>
        <img
          src={"https://cap-baseball.com/images/JCBA_white.png"}
          style={{
            width: 200,
            position: "absolute",
            left: 400,
            top: 180,
          }}
        />
        <span
          style={{
            position: "absolute",
            left: 400,
            top: 270,
            color: "white",
            fontSize: 24,
          }}
        >
          {"Kansai Cap League"}
        </span>
        <span
          style={{
            position: "absolute",
            left: 460,
            top: 310,
            color: "white",
            fontSize: 14,
          }}
        >
          {"since 2022"}
        </span>
      </>
    );
  };

  const Circle: React.FC<{
    radius: number;
    teams?: number[];
    year: number;
    rad: number;
    borderColor:string;
  }> = ({ radius, teams, year, rad, borderColor }) => {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            height: radius,
            width: radius,
            border: `2px solid ${borderColor}`,
            left: alignment - (radius - 500) / 2,
            top: -(radius - 500) / 2,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            color: "white",
            opacity: 0.6,
            top: 445,
            left: alignment + radius * 0.66,
          }}
        >
          {year}
        </div>
        {teams?.map((team, idx) => (
          <div
            style={{
              position: "absolute",
              top:
                (radius / 2 - 50) * Math.sin(-2 * Math.PI * ((idx - 1) / rad)) +
                220,
              left:
                (radius / 2 - 50) * Math.cos(-2 * Math.PI * ((idx - 1) / rad)) +
                alignment +
                215,
            }}
          >
            <CircleIcon
              width={60}
              thumbnail_url={`https://s3.ap-northeast-1.wasabisys.com/capbaseball/teamIcons/${team}.jpg`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: 1500,
        height: 500,
        overflow: "hidden",
        position: "relative",
        backgroundImage:
          `radial-gradient(circle at 70%, #00BAFFbf 10%, #3dc7facc 30%, #7bd9fb33 52.5%, transparent),
          radial-gradient(circle at 32.5%, #ff0000 27.5%, #ff0000cc 30%, #ff000033 52.5%, transparent)`,
      }}
    >
      <Circle radius={1200} year={2023} teams={[]} rad={24} borderColor={'#74deff'}/>
      <Circle radius={1000} year={2022} teams={[239, 251, 155, 232]} rad={28} borderColor={'#74deff'}/>
      <Circle radius={800} year={2021} teams={[162, 202]} rad={24} borderColor={'#74deff'}/>
      <Circle radius={600} year={2020} teams={[65]} rad={16} borderColor={'#74deff'}/>
      <Circle
        radius={400}
        year={2019}
        teams={[57, 58, 61, 73, 67, 106, 111, 62, 94]}
        rad={9}
        borderColor={'#74deff'}
      />
      <>
        {/* {[72, 107, 87, 132, 137, 303].map((team, idx) => (
          <div
            style={{
              position: "absolute",
              top:
                (900 / 2 - 50) * Math.sin(-2 * Math.PI * ((idx + 13) / 31)) +
                215,
              left:
                (900 / 2 - 50) * Math.cos(-2 * Math.PI * ((idx + 13) / 31)) +
                alignment +
                210,
            }}
          >
            <CircleIcon
              width={60}
              thumbnail_url={`https://s3.ap-northeast-1.wasabisys.com/capbaseball/teamIcons/${team}.jpg`}
            />
          </div>
        ))} */}
        {/* {[246, 300, 230, 136, 105].map((team, idx) => (
          <div
            style={{
              position: "absolute",
              top:
                (1010 / 2 - 50) * Math.sin(-2 * Math.PI * ((idx + 14) / 32)) +
                215,
              left:
                (1010 / 2 - 50) * Math.cos(-2 * Math.PI * ((idx + 14) / 32)) +
                alignment +
                210,
            }}
          >
            <CircleIcon
              width={60}
              thumbnail_url={`https://s3.ap-northeast-1.wasabisys.com/capbaseball/teamIcons/${team}.jpg`}
            />
          </div>
        ))} */}
      </>
      <KantoLogo />
      <KansaiLogo />
      <div
        style={{
          marginLeft: -500,
          width: 500,
          height: 500,
          borderRadius: "50%",
          //overflow: "hidden",
          position: "relative",
          //backgroundImage: "radial-gradient(circle at 50%, white -50% ,#fc3333b5 50%, #f82424ba 60%, #ff2d2db3 70%, #ffa8a88f 80%)",
        }}
      >
        <Circle
          radius={400}
          year={2022}
          teams={[246, 300, 230, 136, 105, 72, 107, 87, 132, 137, 303]}
          rad={11}
          borderColor={'#ff7676'}
        />
        <Circle radius={600} year={2023} teams={[]} rad={16} borderColor={'#ff7676'}/>
      </div>
    </div>
  );
}

export default App;
