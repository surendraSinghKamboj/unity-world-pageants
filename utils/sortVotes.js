function sortByVotes(data) {
    return data.sort((a, b) => b.votes - a.votes);
}


export default sortByVotes