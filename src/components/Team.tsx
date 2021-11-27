import "./Team.css";

const Team = () => {
    return (
      <div className="flex justify-between">
          <div className="m-auto flex-wrap justify-between">
              <div className="my-16">
                <div className="avatar">
                  <div className="mb-8 rounded-full w-14 h-14">
                    <a href="https://twitter.com/ipatarch">
                      <img alt="team-member_1" src="./team_1.png" />
                    </a>
                  </div>
                </div> 
                <p className="team_name">Ipatarch</p>
                <p className="team_description">(Project Lead)</p>
              </div>
              <div className="my-16">
                <div className="avatar">
                  <div className="mb-8 rounded-full w-14 h-14">
                    <a href="https://twitter.com/itsclevt?s=21">
                      <img alt="team-member_2" src="./team_2.png" />
                    </a>
                  </div>
                </div>
                <p className="team_name">Clevt</p>
                <p className="team_description">(Marketing)</p>
              </div> 
          </div>
          <div className="m-auto justify-center flex">
              <div className="m-6">
                <div className="avatar">
                  <div className="mb-8 rounded-full w-14 h-14">
                    <a href="https://twitter.com/wjsens02?s=21">
                      <img alt="team-member_3" src="./team_3.png" />
                    </a>
                  </div>
                </div> 
                <p className="team_name">Sens</p>
                <p className="team_description">(Artist)</p>
              </div>
          </div>
          <div className="m-auto flex-wrap justify-between">
              <div className="my-16">
                <div className="avatar">
                  <div className="mb-8 rounded-full w-14 h-14">
                    <a href="https://twitter.com/yonathan_evann">
                      <img alt="team-member_4" src="./team_4.png" />
                    </a>
                  </div>
                </div>
                <p className="team_name">Nathan</p>
                <p className="team_description">(Dev)</p>
              </div>
              <div className="my-16">
                <div className="avatar">
                  <div className="mb-8 rounded-full w-14 h-14">
                    <a href="https://twitter.com/notarkaan?s=21">
                      <img alt="team-member_5" src="./team_5.png" />
                    </a>
                  </div>
                </div> 
                <p className="team_name">Ark</p>
                <p className="team_description">(Community Relation)</p>
              </div> 
          </div>
      </div>
  
    )
  }
  
  export default Team;