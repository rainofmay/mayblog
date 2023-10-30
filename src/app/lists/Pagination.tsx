import styles from './pagination.module.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
      <nav className={styles.container}>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
              <span onClick={() => paginate(number)} className={styles.pageLink}>
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default Pagination;
