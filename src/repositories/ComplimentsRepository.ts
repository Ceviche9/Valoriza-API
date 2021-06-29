import {Repository, EntityRepository} from 'typeorm';
import { compliments } from '../entities/Compliment';

@EntityRepository(compliments)
class ComplimentsRepository extends Repository<compliments>{}

export {ComplimentsRepository}