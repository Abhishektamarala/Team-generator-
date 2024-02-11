
let team_list=['KKR','MI','SRH','RCB','KXIP','DC','RR','CSK']
let teams  = [
    {
        'team_name':'KKR',
        'players_name':['Shubman abhisheke', 'Sunil Narine', 'Nitish Rana', 'Eoin Morgan', 'Dinesh Karthik', 'Andre Russell', 'Pat Cummins', 'Kuldeep Yadav', 'Shivam Mavi', 'Kamlesh Nagarkoti', 'Prasidh Krishna', 'Rahul Tripathi', 'Siddhesh Lad', 'Sandeep Warrier', 'Nikhil Naik', 'Chris Green', 'Lockie Ferguson', 'Rinku Singh', 'Ali Khan', 'Tom Banton', 'Varun Chakravarthy', 'Manimaran Siddharth'],
        'players_role':[2,3,2,2,1,3,4,4,4,4,4,2,2,4,1,4,4,2,4,2,4,4],
        'players_credits':[8.5,10,9,9,9,10.5,9,8.5,8,8,8,8,8,8,7.5,8,8.5,8,8,8,8,7.5],
        'players_image':[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    }
    ,
    {
        'team_name':'MI',
        'players_name':['Rohit manam', 'Quinton de Kock', 'Suryakumar Yadav', 'Saurabh Tiwary', 'Hardik Pandya', 'Kieron Pollard', 'Krunal Pandya', 'James Pattinson', 'Rahul Chahar', 'Trent Boult', 'Jasprit Bumrah', 'Chris Lynn', 'Aditya Tare', 'Dhawal Kulkarni', 'Mitchell McClenaghan', 'Nathan Coulter-Nile', 'Jayant Yadav', 'Ishan Kishan', 'Anmolpreet Singh', 'Anukul Roy', 'Mohsin Khan', 'Sherfane Rutherford', 'Digvijay Deshmukh', 'Prince Balwant Rai'],
        'players_role':[2,1,2,2,3,3,3,4,4,4,4,2,1,4,4,4,4,1,2,3,4,2,4,4],
        'players_credits':[10.5,9.5,9,8,9.5,9,8.5,8,8,8.5,9,9,7.5,8,8.5,8.5,8,8.5,8,8,8,8,7.5,7.5],
        'players_image':[23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    },
    {
      'team_name':'SRH',
      'players_name':['Kane Williamson','David Warner','Jonny Bairstow','Manish Pandey','Mohammad Nabi','Priyam Garg','Vijay Shankar', 'Wriddhiman Saha', 'Virat Singh', 'Bhuvneshwar Kumar', 'Basil Thampi','Abhishek Sharma','Billy Stanlake','Sandeep Sharma', 'Shahbaz Nadeem','Shreevats Goswami','Siddarth Kaul', 'Khaleel Ahmed','T Natarajan', 'Json Holder', 'Bavanaka Sandeep','Fabian Allen','Abdul Samad', 'Sanjay Yadav', 'Rashid Khan'],
      'players_role':[2,2,1,2,3,2,3,1,2,4,4,3,4,4,4,1,4,4,4,3,2,3,2,3,4],
      'players_credits':[9.5,10.5,9.5,9,9,8,8.5,8,8,9,8,8,8,8,8,7.5,8.5,8,8,8.5,8,8,8,7.5,9.5],
      'players_image':[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71],
    },
    {
      'team_name':'RCB',
      'players_name':['Virat Kohli', 'AB de Villiers', 'Devdutt Padikkal', 'Aaron Finch', 'Shivam Dube', 'Gurkeerat Singh Mann', 'Washington Sundar', 'Isuru Udana', 'Navdeep Saini', 'Adam Zampa', 'Yuzvendra Chahal', 'Umesh Yadav', 'Dale Steyn', 'Parthiv Patel', 'Moeen Ali', 'Pawan Negi', 'Chris Morris', 'Pavan Deshpande', 'Mohammed Siraj', 'Josh Philippe', 'Shahbaz Ahmed'],
      'players_role':[2,1,2,2,3,2,3,4,4,4,4,4,4,1,3,4,3,2,4,1,3],
      'players_credits':[10.5,10,8.5,9,8.5,8,8,8,8.5,8.5,9,8.5,8.5,8.5,8.5,8,9,8,8,8,7.5],
      'players_image':[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92],
    },
    {
      'team_name':'KXIP',
      'players_name':['Lokesh Rahul', 'Harpreet Brar', 'Ishan Porel', 'Mandeep Singh', 'James Neesham', 'Tajinder Singh', 'Chris Jordan', 'Karun Nair', 'Deepak Hooda', 'Ravi Bishnoi', 'Arshdeep Singh', 'Glenn Maxwell', 'Mujeeb Ur Rahman', 'Sarfaraz Khan', 'Sheldon Cottrell', 'Mayank Agarwal', 'Mohammed Shami', 'Darshan Nalkande', 'Nicholas Pooran', 'Chris Gayle', 'Murugan Ashwin', 'Jagadeesha Suchith', 'Krishnappa Gowtham', 'Hardus Viljoen', 'Simran Singh'],
      'players_role':[1,4,4,2,3,3,4,2,2,4,4,3,4,2,4,2,4,4,1,2,4,4,3,4,1],
      'players_credits':[10.5,8,8,8,8.5,7.5,8.5,8.5,8,8,7.5,9,8.5,8,8.5,9.5,9,8,9,9.5,8,8,8.5,8,7.5],
      'players_image':[93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117],
    },
    {
      'team_name':'DC',
      'players_name':['Shreyas Iyer', 'Kagiso Rabada', 'Marcus Stoinis', 'Sandeep Lamichhane', 'Ishant Sharma', 'Ajinkya Rahane', 'Ravichandran Ashwin', 'Shikhar Dhawan', 'Shimron Hetmyer', 'Alex Carey', 'Mohit Sharma', 'Prithvi Shaw', 'Lalit Yadav', 'Avesh Khan', 'Axar Patel', 'Tushar Deshpande', 'Rishabh Pant', 'Harshal Patel', 'Keemo Paul', 'Amit Mishra', 'Anrich Nortje', 'Daniel Sams'],
      'players_role':[2,4,3,4,4,2,4,2,2,1,4,2,3,4,3,4,1,4,3,4,4,3],
      'players_credits':[9.5,9.5,8.5,8.5,8.5,9,9,10,8.5,8.5,8,8.5,7.5,8,8.5,7.5,9.5,8,8,8.5,8,8],
      'players_image':[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139],
    },
    {
      'team_name':'RR',
      'players_name':['Jos Buttler', 'Steven Smith', 'Sanju Samson', 'Robin Uthappa','Riyan Parag', 'Rahul Tewatia', 'Tom Curran', 'Shreyas Gopal', 'Jofra Archer', 'Jaydev Unadkat', 'Ankit Rajpoot', 'David Miller', 'Yashasvi Jaiswal', 'Varun Aaron', 'Aniruddha Joshi', 'Manan Vohra', 'Andrew Tye', 'Shashank Singh', 'Mahipal Lomror', 'Oshane Thomas', 'Mayank Markande', 'Anuj Rawat', 'Kartik Tyagi', 'Akash Singh','Ben Stokes'],
      'players_role':[1,2,1,2,3,3,4,4,4,4,4,2,2,4,2,2,4,3,4,4,4,1,4,4,3],
      'players_credits':[10.5,10,9.5,8.5,8,8.5,8.5,8.5,9,8.5,8,8.5,8,8,7.5,8,8.5,7.5,8,8,8,8,8,7.5,9.5],
      'players_image':[140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164],
    },
    {
      'team_name':'CSK',
      'players_name':['Shane Watson', 'Murali Vijay', 'Ambati Rayudu', 'MS Dhoni', 'Dwayne Bravo', 'Faf du Plessis', 'Kedar Jadhav', 'Ravindra Jadeja', 'Piyush Chawla', 'Shardul Thakur', 'Deepak Chahar', 'KM Asif', 'Imran Tahir', 'N Jagadeesan', 'Karn Sharma', 'Lungi Ngidi', 'Mitchell Santner', 'Monu Kumar', 'Ruturaj Gaikwad', 'Sam Curran', 'Josh Hazlewood', 'Ravisrinivasan Sai Kishore'],
      'players_role':[2,2,2,1,3,2,2,3,4,4,4,4,4,1,4,4,3,4,2,3,4,4],
      'players_credits':[9,8.5,9,9.5,9,9.5,8,9,8.5,8.5,8.5,8,9,8,8,8.5,8.5,7.5,8,8.5,8.5,8],
      'players_image':[165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186],
    },
]
class Player
  {
    constructor(n,r,c,i,p_i,p_t_i)
    {
      this.player_name = n
      this.player_role = r
      this.player_credits = c
      this.player_image = i
      this.player_index=p_i
      this.player_team_index=p_t_i
    }
  }
class Team
  {
    constructor(player_list,team_n)
    {
      this.players =player_list
      this.team_name = team_n
    }
  }
let store_teams = function(){
  if(localStorage.getItem('teams_stored')=='stored') return
  
Team_Final_List=[]
for(let i=0;i<8;i++)
{
    let obj =teams[i]
    let player_list_obj=[]
    for(let j=0;j<obj.players_name.length;j++)
    {
        player_list_obj.push(new Player(obj.players_name[j],obj.players_role[j],obj.players_credits[j],obj.players_image[j],j,i))
    }
    Team_Final_List.push(new Team(player_list_obj,obj.team_name))
}
//console.log(Team_Final_List)
json_string = JSON.stringify({teams:Team_Final_List,})
localStorage.setItem('teams_data',json_string)
localStorage.setItem('teams_stored','stored')
localStorage.setItem('start_id','101')
  
}