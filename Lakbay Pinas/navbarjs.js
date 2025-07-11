            let subMenu = document.getElementById("subMenu");

           
            window.toggleMenu = function() { 
                subMenu.classList.toggle("open-menu");
            }

            
            const closeDropdownOnOutsideClick = (event) => {
                if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content') && !event.target.matches('.user-pic') && !event.target.closest('.sub-menu-wrap')) {
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                        initializeActiveState(); 
                    }
                    if (subMenu.classList.contains('open-menu')) { 
                        subMenu.classList.remove('open-menu');
                    }
                }
            };

            const logoutLink = document.getElementById('logoutLink');
            if (logoutLink) {
                logoutLink.addEventListener('click', (event) => {
                    event.preventDefault(); 
                    window.location.href = 'LoginPage.html'; 
                });
            }

            