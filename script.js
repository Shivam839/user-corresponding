var pgNum = 1;
var issueName;
document.getElementById("next").addEventListener("click", () => {
    if (pgNum < 5) pgNum = pgNum + 1;
    console.log(pgNum);
    document.getElementById("head").textContent = `Page Number : ${pgNum}`;
    fetch("https://content.newtonschool.co/v1/pr/main/users")
        .then(function (response) {
            // The API call was successful!
            return response.json();
        })
        .then(function (data) {
            // This is the JSON from our response
            issueName = data;
            for (let i = 0; i < 2; i++) {
                document.getElementById(`${i + 1}`).textContent =
                    issueName[(pgNum - 1) * 2 + i].name;
                fetch(
                    `https://content.newtonschool.co/v1/pr/main/posts?user_id=${(pgNum - 1) * 2 + i + 1
                    }`
                ).then(function (res) {
                        return res.json();})
                    .then(function (postList) {
                        console.log("postlist", postList);
                        for (let j = 0; j < Math.min(3, postList.length); j++) {
                            document.getElementById(
                                `post${i + 1}${j + 1}`
                            ).textContent = postList[j].title;
                        }
                    });
            }})
        .catch(function (err) {
		console.warn("Something went wrong.", err);
        });
});
document.getElementById("prev").addEventListener("click", () => {
    if (pgNum > 1) {
        pgNum = pgNum - 1;
        console.log(pgNum);
        document.getElementById(
            "head"
        ).textContent = `Page Number : ${pgNum}`;
        fetch("https://content.newtonschool.co/v1/pr/main/users")
            .then(function (response) {
                // The API call was successful!
                return response.json();
            })
            .then(function (data) {
                // This is the JSON from our response
                issueName = data;
                for (let i = 0; i < 2; i++) {
                    document.getElementById(`${i + 1}`).textContent =
                        issueName[(pgNum - 1) * 2 + i].name;
                    fetch(
                        `https://content.newtonschool.co/v1/pr/main/posts?user_id=${(pgNum - 1) * 2 + i + 1
                        }`)
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (postList) {
                            console.log("postlist", postList);
                            for (let j = 0; j < Math.min(3, postList.length); j++) {
                                document.getElementById(
                                    `post${i + 1}${j + 1}`
                                ).textContent = postList[j].title;
                            }});
                }
                console.log(issueName);
            })
            .catch(function (err) {
                // There was an error
                console.warn("Something went wrong.", err);
            });
    }

});
fetch("https://content.newtonschool.co/v1/pr/main/users")
    .then(function (response) {
        // The API call was successful!
        return response.json();
    })
    .then(function (data) {
        // This is the JSON from our response
        issueName = data;
        for (let i = 0; i < 2; i++) {
            document.getElementById(`${i + 1}`).textContent = issueName[i].name;
            fetch(
                `https://content.newtonschool.co/v1/pr/main/posts?user_id=${i + 1
                }`
            ).then(function (res) {
                    return res.json();
                })
                .then(function (postList) {
                    console.log("postlist", postList);
                    for (let j = 0; j < Math.min(3, postList.length); j++) {
                        document.getElementById(`post${i + 1}${j + 1}`).textContent =
                            postList[j].title;
                    }
                });
        }
    })
    .catch(function (err) {
        console.warn("Something went wrong.", err);
    });
document.getElementById("head").textContent = `Page Number : ${pgNum}`;