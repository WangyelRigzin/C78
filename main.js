var images = ["me.png","SISTER.jpg", "DAD.jpg" , "MOM.jpg"];
            var names = ["Family Book","Wangyel rigzin", "Chimmi yangzom", "Tshewang rinzin", "Tshering wangmo"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }