import Database from 'mssql';
import { config } from '$lib/dbconfig';

const db = new Database(config)
