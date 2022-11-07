function comments(input) {

    let output = { usersList: [], articlesList: [], comments: {} };

    for (let line of input) {

        if (line.includes('user ')) {
            let currentLine = line.split(' ');
            let userName = currentLine.pop();

            output.usersList.push(userName);
        } else if (line.includes('article ')) {
            let currentLine = line.split(' ');
            let currentArticle = currentLine.pop();

            output.articlesList.push(currentArticle);
        } else if (line.includes(' posts on ')) {
            let comment = line.split(' ');
            let currentArticle = comment[3].split(':')[0];
            let userName = comment[0];

            if (output.usersList.includes(userName) && output.articlesList.includes(currentArticle)) {
                let commentTitle = line.split(': ')[1].split(', ')[0];
                let commentContent = line.split(', ')[1];

                if (!output.comments.hasOwnProperty(currentArticle)) {
                    output.comments[currentArticle] = [{
                        [userName]: `--- From user ${userName}: ${commentTitle} - ${commentContent}`
                    }];
                } else {
                    output.comments[currentArticle].push({ [userName]: `--- From user ${userName}: ${commentTitle} - ${commentContent}` })
                }
            }
        }
    }

    let sortedComments = Object.entries(output.comments).sort((a, b) => b[1].length - a[1].length);

    for (let [name, comments] of sortedComments) {
        console.log(`Comments on ${name}`);

        for (let commentItem of comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
            let [user, comment] = Object.entries(commentItem)[0];
            console.log(comment);
        }
    }
}
comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);