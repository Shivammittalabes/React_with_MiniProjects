import config from '../config'

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({Title, Slug, Content, FeaturedImage, Status, UserId }) {

        try {
           return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            Slug,
            {
                Title,
                Content,
                FeaturedImage,
                Status,
                UserId,
            }
           ) 
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    } 

    async updatePost(Slug, {Title, Content, FeaturedImage, Status}) {

        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                Slug,
                {
                   Title,
                   Content,
                   FeaturedImage,
                   Status, 
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(Slug) {

        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                Slug,
                
            )  

            return true

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);

            return false
        }
    }

    async getPost(Slug){

        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                Slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    async getPosts( queries = [Query.equal("Status", "active")]) {

        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }

    // File Upload Services

    async uploadFile(file) {

        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {

        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFileReview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()  // for accessing the direct values

export default service

