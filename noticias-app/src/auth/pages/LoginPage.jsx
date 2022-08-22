

export const LoginPage = () => {
  return (
    <>
      <div style={{overflow: 'hidden'}}>

        <div className='container border border-secondary rounded animate__animated animate__backInUp p-3 mt-5 w-50'>
        
          <form>
            <div className="form-group">
              <label for="inputEmail" className='mb-1'>Email address</label>
              <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
            </div>

            <button type="submit" class="btn btn-primary mt-2">Login</button>
        
        </form>
        </div>

      </div>

    </>
  )
}
