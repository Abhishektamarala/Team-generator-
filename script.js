teamLeft = document.querySelectorAll('.team-left')
teamRight = document.querySelectorAll('.team-right')
teamChange = document.querySelectorAll('.team-change')
window.onload =store_teams
teamLeft.forEach((obj,index)=>
{
    obj.addEventListener('click',()=>
    {
        teamLeft.forEach((temp_obj)=>
        {
            temp_obj.classList.remove('active-team')
        })
        obj.classList.add('active-team')
    })
})
cpd = document.getElementById('change_player_data')
cpd.addEventListener('click',()=>
{
    fp = document.getElementById('first_panel')
    fp.style.display="none"
    ccpp = document.getElementById('choose_change_player_panel')
    ccpp.style.display="block"
})
teamChange.forEach((obj,index)=>
{
    obj.addEventListener('click',()=>
    {
        teamChange.forEach((temp_obj)=>
        {
            temp_obj.classList.remove('active-team')
        })
        obj.classList.add('active-team')
    })
})
change_player = document.getElementById('change_player_continue')
change_player.addEventListener('click',()=>
{
    ccpp = document.getElementById('choose_change_player_panel')
    ccpp.style.display="none"
    let flag = -1
    teamChange.forEach((temp_obj,index)=>
    {
        if(Array.from(temp_obj.classList).includes('active-team'))
            flag = index
    })
    if(flag==-1){ raiseError('Should Select Team!'); return;}
    cp = document.getElementById('change_player')
    cp.style.display="block"
    console.log(flag)
    change_player_data(flag);
})
choose_type = document.getElementById('choose_type')
choose_type.addEventListener('click',()=>
{
    cm = document.getElementById('choose_match')
    cm.style.display="block"
    fp= document.getElementById('first_panel')
    fp.style.display="none"
})
teamRight.forEach((obj,index)=>
{
    obj.addEventListener('click',()=>
    {
        let temp = checkTeamOne()
        if(temp!=-1){
            teamRight.forEach((temp_obj)=>
            {
                temp_obj.classList.remove('active-team')
            })
            if(temp==index){raiseError('You cannot select same two teams!')}
            else{obj.classList.add('active-team')}
        }
        else{
            raiseError('Should Select Team One First!')
        }
    })
})


let checkTeamOne = function()
{
    let flag=-1
    teamLeft.forEach((obj,index)=>
    {
        if(Array.from(obj.classList).includes("active-team")) flag=index
    })
    return flag
}
let checkTeamTwo = function()
{
    let flag=-1
    teamRight.forEach((obj,index)=>
    {
        if(Array.from(obj.classList).includes("active-team")) flag=index
    })
    return flag
}
teamContinue = document.querySelector('.team-continue')
teamContinue.addEventListener('click',()=>
{
    let team1=checkTeamOne()
    let team2=checkTeamTwo()
    if(team1!=-1 && team2!=-1)
    {
        cm = document.getElementById('choose_match')
        cm.style.display="none"
        mn = document.getElementById('match_number')
        mn.style.display="block"
        match_number_control(team1,team2)
        // some changes have to be done
        
    }
    else raiseError('You Must Select Two Teams!')
})
cm = document.getElementById('custom_match')
cm.addEventListener("click",()=>{
    cp=document.getElementById('custom_panel')
    fp = document.getElementById('first_panel')
    fp.style.display="none"
    cp.style.display="block"
})
let match_number_control = function(team1,team2)
{
    mnc= document.getElementById('match_number_continue')
    mnc.addEventListener('click',()=>
    {
        mnv = document.getElementById('match_number_value')
        mnv_value = mnv.value
        if(mnv_value==null) {raiseError('Invalid Input');return}
        mn = document.getElementById('match_number')
        mn.style.display="none"
        cp = document.getElementById('choose_player')
        cp.style.display="block"
        GeneratePlayers(team1,team2,Number(mnv_value))
    })
}
let GeneratePlayers = function(team1,team2,mn)
{
    if(team1>team2)
    {
        let temp = team1
        team1= team2
        team2= temp
    }
    teams_data = localStorage.getItem('teams_data')
    teams_json = JSON.parse(teams_data)
    team1_data = teams_json.teams[team1]
    team2_data = teams_json.teams[team2]
    displayTeams(team1_data,team2_data,team1,team2,mn)
}
home = document.getElementById('home_id')
home.addEventListener('click',()=>
{
    location.reload()
})
let displayTeams = function(team1_data,team2_data,team1,team2,mn)
{
    role_value = ['','WK','BAT','AL','BOWL']
    let team_list=['KKR','MI','SRH','RCB','KXIP','DC','RR','CSK']
    team_one = document.getElementById('team_one')
    team_two = document.getElementById('team_two')
    team_one_head = document.getElementById('team_one_head')
    team_two_head = document.getElementById('team_two_head')
    team_one_img = document.createElement('img')
    team_two_img = document.createElement('img')
    team_one_img.src = 'dream11_images/'+team_list[team1]+".jpg"
    team_two_img.src = 'dream11_images/'+team_list[team2]+".jpg"
    team_one_img.classList.add('team-image')
    team_two_img.classList.add('team-image')

    span_one = document.createElement('span')
    span_two = document.createElement('span')
    span_one.classList.add('span_one_index')
    span_one.classList.add('span_two_index')
    span_one.textContent=team1
    span_two.textContent=team2
    span_one.style.display="none"
    span_two.style.display="none"
    team_one_head.appendChild(team_one_img)
    team_one_head.appendChild(span_one)
    team_two_head.appendChild(team_two_img)
    team_two_head.appendChild(span_one)


    
    team1_data.players.forEach((player)=>
    {
        outer_div = document.createElement('div')
        inner_div1 = document.createElement('div')
        inner_div2 = document.createElement('div')
        span_name = document.createElement('span')
        span_name.textContent=player.player_name
        span_role = document.createElement('span')
        span_role.setAttribute('id','player_role')
        span_role.textContent=role_value[player.player_role]
        span_credits = document.createElement('span')
        span_credits.textContent=player.player_credits
        inner_div2.classList.add('d-flex','justify-content-between')
        inner_div2.appendChild(span_role)
        inner_div2.appendChild(span_credits)
        inner_div1.appendChild(span_name)
        inner_div1.appendChild(inner_div2)
        inner_div1.classList.add('d-flex','flex-column','justify-content-center')
        inner_div1.style.width="140px"
        var img = document.createElement('img');
        img.src = 'player_images/'+player.player_image+'.jpg';
        img.style.width="30px"
        img.style.height="30px"
        img.style.marginRight="10px"
        outer_div.appendChild(img)
        outer_div.appendChild(inner_div1)
        outer_div.classList.add('d-flex','justify-content-between','align-items-center','border-grey','team_one_data')
        outer_div.style.width="200px";
        outer_div.style.marginTop="10px"
        outer_div.style.marginBottom="10px"
        team_one.appendChild(outer_div)
    })
    team2_data.players.forEach((player)=>
    {
        outer_div = document.createElement('div')
        inner_div1 = document.createElement('div')
        inner_div2 = document.createElement('div')
        span_name = document.createElement('span')
        span_name.textContent=player.player_name
        span_role = document.createElement('span')
        span_role.setAttribute('id','player_role')
        span_role.textContent=role_value[player.player_role]
        span_credits = document.createElement('span')
        span_credits.textContent=player.player_credits
        inner_div2.classList.add('d-flex','justify-content-between')
        inner_div2.appendChild(span_role)
        inner_div2.appendChild(span_credits)
        inner_div1.appendChild(span_name)
        inner_div1.appendChild(inner_div2)
        inner_div1.classList.add('d-flex','flex-column','justify-content-center')
        inner_div1.style.width="140px"
        var img = document.createElement('img');
        img.src = 'player_images/'+player.player_image+'.jpg';
        img.style.width="30px"
        img.style.height="30px"
        img.style.marginRight="10px"
        outer_div.appendChild(img)
        outer_div.appendChild(inner_div1)
        outer_div.classList.add('d-flex','justify-content-between','align-items-center','border-grey','team_two_data')
        outer_div.style.width="200px";
        outer_div.style.marginTop="10px"
        outer_div.style.marginBottom="10px"
        team_two.appendChild(outer_div)
    })
select_players(team1,team2,mn)
}

