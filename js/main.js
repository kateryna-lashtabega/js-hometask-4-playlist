var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
        {
            author: "queen",
            song: "bohemian rhapsody",
            duration: "2:30"
        },
        {
            author: "lynyrd skynyrd",
            song: "free bird",
            duration: "1:56"
        },
        {
            author: "deep purple",
            song: "smoke on the water",
            duration: "3:03"
        },
        {
            author: "jimi hendrix",
            song: "all along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "back in black",
            duration: "2:43"
        },
        {
            author: "queen",
            song: "we will rock you",
            duration: "2:13"            
        },
        {
            author: "metallica",
            song: "enter sandman",
            duration: "3:03"            
        }
    ];

    
  

    ;(function(){
        for (var i = 0; i < playList.length; i++) {
            var song = document.createElement('li');
            song.className = 'ba-tune';
            document.getElementById("playlist").appendChild(song);

            var picture = document.createElement('span');
            picture.innerHTML = '<svg><use xlink: href="#icon-heart"></use></svg>';
            picture.className = 'ba-tune__like';
            
            var time =  document.createElement('span');
            time.className = 'ba-tune__duration';
            time.innerHTML = playList[i].duration;

            var author =  document.createElement('span');
            author.className = 'ba-tune__author';
            author.innerHTML =  playList[i].author;
            
            var songTitle = document.createElement('span');
            songTitle.className = 'ba-tune__song';
            songTitle.innerHTML = playList[i].song;
            
            song.appendChild(picture);
            song.appendChild(time);
            song.appendChild(author);
            song.appendChild(songTitle);
         }
    })();
  

    