import os from 'os';
import path from 'path';

export const CURRENT_PATH = process.cwd();

export const DEFAULT_EMAILS_DIRECTORY = 'emails';
export const PACKAGE_NAME = 'create-react-email-test';

export const HOME_DIR = os.homedir();

export const DOT_EMAIL_DEV = path.join(HOME_DIR, '.react-email');

export const NODE_MODULES_PACKAGE_PATH = path.join(
  CURRENT_PATH,
  'node_modules',
  PACKAGE_NAME,
);
export const NODE_MODULES_PREVIEW_PATH = path.join(
  NODE_MODULES_PACKAGE_PATH,
  'preview',
);

export const CLIENT_EMAILS_PATH = path.join(
  CURRENT_PATH,
  DEFAULT_EMAILS_DIRECTORY,
);
export const PACKAGE_EMAILS_PATH = path.join(
  DOT_EMAIL_DEV,
  DEFAULT_EMAILS_DIRECTORY,
);

export const EVENT_FILE_DELETED = 'unlink';
