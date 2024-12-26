## Brief description :

## Instructions on how to run the application locally:
# Project Setup :gear:

Follow these steps to set up and run the project locally:

1. **Clone the Repository**  
   First, clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. **Create the `.env` File**  
   Navigate to the `projectSource code` folder and create a `.env` file with the following contents:
   ```plaintext
   # Database credentials
   POSTGRES_USER="postgres"
   POSTGRES_PASSWORD="pwd"
   POSTGRES_DB="users_db"

   # Node vars
   SESSION_SECRET="super duper secret!"
   ```
   
3. **Run Docker**  
   In your terminal, navigate to the Sohrab folder
   ```bash
         cd Sohrab/ProjectSourceCode
    ```

    Run the following command to start the containers:
   ```bash
   docker compose up -d
   ```

Your setup is complete! The project should now be running.

