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

  const alignment = 450;
  const CenterLogo = () => {
    return (
      <>
        <img
          src={"https://cap-baseball.com/images/JCBA_white.png"}
          style={{
            width: 200,
            position: "absolute",
            left: (500 - 200) / 2 +alignment,
            top: 200,
          }}
        />
        <span
          style={{
            position: "absolute",
            left: (500 - 200) / 2 + alignment,
            top: 290,
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
            top: 320,
            color: "white",
            fontSize: 14,
          }}
        >
          {"since 2019"}
        </span>
      </>
    );
  };

  const Circle: React.FC<{ radius: number; teams?: number[]; year: number, rad:number }> =
    ({ radius, teams, year, rad }) => {
      return (
        <div>
          <div
            style={{
              position: "absolute",
              borderRadius: "50%",
              height: radius,
              width: radius,
              border: "2px solid #74deff",
              left: alignment - (radius - 500) / 2,
              top: -(radius - 500) / 2,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              color: 'white',
              opacity: 0.6,
              top:445,
              left:
              alignment + (radius*0.66),
            }}
          >{year}</div>
          {teams?.map((team, idx) => (
            <div
              style={{
                position: "absolute",
                top:
                  (radius / 2 - 50) *
                    Math.sin(-2 * Math.PI * ((idx-1) / rad)) +
                  215,
                left:
                  (radius / 2 - 50) *
                    Math.cos(-2 * Math.PI * ((idx-1) / rad)) +
                  alignment+ 210,
              }}
            >
              <CircleIcon
                width={75}
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
          "radial-gradient(circle at 50%, #00BAFF 50%, #3dc7fa 60%, #7bd9fb 70%, #93dcf7 80%)",
      }}
    >
      <Circle radius={1300} year={2023} teams={[]} rad={24}/>
      <Circle radius={1100} year={2022} teams={[239, 251, 155, 232]} rad={28}/>
      <Circle radius={900} year={2021} teams={[162,202]} rad={24}/>
      <Circle radius={700} year={2020} teams={[65]} rad={16}/>
      <Circle
        radius={500}
        year={2019}
        teams={[57, 58, 61, 73, 67, 106, 111, 62, 94]}
        rad={9}
      />
      <CenterLogo />
    </div>
  );
}

export default App;
