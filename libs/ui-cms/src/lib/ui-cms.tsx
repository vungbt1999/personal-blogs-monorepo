import styles from './ui-cms.module.scss';

/* eslint-disable-next-line */
export interface UiCmsProps {}

export function UiCms(props: UiCmsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCms!</h1>
    </div>
  );
}

export default UiCms;
